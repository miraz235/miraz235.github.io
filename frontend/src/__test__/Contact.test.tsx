import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from '../components/Contact';
import { toast } from '../components/ui/sonner';
import { sendContactInfo } from '../lib/api';

jest.mock('../lib/api', () => ({
  sendContactInfo: jest.fn(),
}));
jest.mock("../components/ui/sonner", () => ({
  toast: { success: jest.fn(), error: jest.fn() },
  Toaster: () => null,
}));

const mockSendContactInfo = sendContactInfo as jest.MockedFunction<typeof sendContactInfo>;

beforeEach(() => {
  mockSendContactInfo.mockReset();
});

describe("Contact", () => {
  beforeEach(() => jest.clearAllMocks());

  test("renders contact form fields", () => {
    render(<Contact />);
    expect(screen.getByTestId("contact-form")).toBeInTheDocument();
    expect(screen.getByTestId("contact-name-input")).toBeInTheDocument();
    expect(screen.getByTestId("contact-email-input")).toBeInTheDocument();
    expect(screen.getByTestId("contact-message-input")).toBeInTheDocument();
    expect(screen.getByTestId("contact-submit-btn")).toBeInTheDocument();
  });

  test("validation: blocks submit when fields are empty", async () => {
    render(<Contact />);
    await userEvent.click(screen.getByTestId("contact-submit-btn"));
    expect(toast.error).toHaveBeenCalledWith("Please fill all fields.");
    expect(mockSendContactInfo).not.toHaveBeenCalled();
  });

  test("submits the form to /api/contact and shows success toast", async () => {
    mockSendContactInfo.mockResolvedValueOnce({ data: { ok: true, id: "x1" } } as any);

    render(<Contact />);
    await userEvent.type(screen.getByTestId("contact-name-input"), "Recruiter Bot");
    await userEvent.type(screen.getByTestId("contact-email-input"), "hire@acme.com");
    await userEvent.type(
      screen.getByTestId("contact-message-input"),
      "We have a senior frontend role you'd love."
    );
    await userEvent.click(screen.getByTestId("contact-submit-btn"));

    await waitFor(() => {
      expect(mockSendContactInfo).toHaveBeenCalled();
    });
    const [contactInfo] = mockSendContactInfo.mock.calls[0];
    expect(contactInfo).toEqual({
      name: "Recruiter Bot",
      email: "hire@acme.com",
      message: "We have a senior frontend role you'd love.",
    });
    expect(toast.success).toHaveBeenCalled();
  });
});
