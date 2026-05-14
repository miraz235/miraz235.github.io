import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Nav from '../components/Nav';

describe("Nav", () => {
  test("renders the logo + brand", () => {
    render(<Nav />);
    expect(screen.getByTestId("nav-logo")).toBeInTheDocument();
  });

  test("renders all desktop nav links", () => {
    render(<Nav />);
    const ids = ["about", "experience", "stack", "projects", "contact"];
    ids.forEach((id) => {
      expect(screen.getByTestId(`nav-link-${id}`)).toBeInTheDocument();
    });
  });

  test("'Hire me' CTA points to #contact", () => {
    render(<Nav />);
    const cta = screen.getByTestId("nav-cta");
    expect(cta).toHaveAttribute("href", "#contact");
  });

  test("mobile menu opens when toggle is clicked", async () => {
    render(<Nav />);
    const toggle = screen.getByTestId("nav-mobile-toggle");
    expect(screen.queryByTestId("nav-mobile-menu")).toBeNull();

    await userEvent.click(toggle);
    await waitFor(() =>
      expect(screen.getByTestId("nav-mobile-menu")).toBeInTheDocument()
    );
  });
});
