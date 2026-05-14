import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero';
import { PROFILE } from '../data/resume';

describe("Hero", () => {
  beforeEach(() => render(<Hero />));

  test("renders the candidate name", () => {
    expect(screen.getByTestId("hero-name")).toHaveTextContent(PROFILE.name);
  });

  test("renders the availability pill with status text", () => {
    const pill = screen.getByTestId("hero-status-pill");
    expect(pill).toBeInTheDocument();
    expect(pill).toHaveTextContent(PROFILE.availability);
  });

  test("renders primary CTA linking to the Contact section", () => {
    const cta = screen.getByTestId("hero-cta-primary");
    expect(cta).toBeInTheDocument();
    expect(cta).toHaveAttribute("href", "#contact");
  });

  test("renders secondary CTA with mailto link", () => {
    const mail = screen.getByTestId("hero-cta-secondary");
    expect(mail).toHaveAttribute("href", `mailto:${PROFILE.email}`);
  });

  test("renders the photo card with profile image", () => {
    const card = screen.getByTestId("hero-photo-card");
    expect(card).toBeInTheDocument();
    const img = card.querySelector("img") as HTMLImageElement;
    expect(img).not.toBeNull();
    expect(img.alt).toBe(PROFILE.name);
  });
});
