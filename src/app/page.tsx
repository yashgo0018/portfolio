import Footer from "@/components/Footer";
import { gql } from "@apollo/client";
import { Metadata } from "next";
import AboutSection from "../components/AboutSection";
import AwardSection from "../components/AwardSection";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import TechnologiesSection from "../components/TechnologiesSection";
import TestimonialSection from "../components/TestimonialSection";
import { sanityClient } from "../sanity";

export default async function Home() {
  const {
    shortDescription,
    longDescription,
    image,
    technologies,
    testimonials,
    links,
    projects,
    awards,
  } = await getData();
  return (
    <>
      <div className="container mx-auto">
        <HeroSection shortDescription={shortDescription} links={links} />
        <AboutSection image={image} longDescription={longDescription} />
        <AwardSection awards={awards} />
        <ProjectSection projects={projects} />
        <TestimonialSection testimonials={testimonials} />
        <TechnologiesSection technologies={technologies} />
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const { shortDescription, image, technologies } = await getData();

  return {
    title: "Yash Goyal | Blockchain & Backend Developer",
    description: shortDescription,
    keywords: technologies.map((tech) => tech.name),
    openGraph: {
      images: ["/favicon.png", image.asset.url],
    },
  };
}

async function getData() {
  const { data } = await sanityClient.query({
    query: gql`
      query Data {
        allProject {
          title
          description
          image {
            asset {
              url
            }
          }
          links {
            type
            href
            icon {
              asset {
                url
              }
            }
          }
        }
        allAward {
          title
          description
          date
          event
        }
        allTestimonial {
          name
          position
          image {
            asset {
              url
            }
          }
          review
        }
        allSettings {
          short_description
          long_description
          image {
            asset {
              url
            }
          }
          technologies {
            name
            logo {
              asset {
                url
              }
            }
          }
          links {
            type
            href
            icon {
              asset {
                url
              }
            }
          }
        }
      }
    `,
  });

  const { allProject, allAward, allTestimonial, allSettings } = data;

  const awards = allAward.map((award: any) => ({
    title: award.title,
    description: award.description,
    date: new Date(award.date),
    event: award.event,
  }));

  return {
    shortDescription: allSettings[0].short_description,
    longDescription: allSettings[0].long_description,
    image: allSettings[0].image,
    technologies: allSettings[0].technologies,
    testimonials: allTestimonial,
    links: allSettings[0].links,
    projects: allProject,
    awards,
  } as {
    shortDescription: string;
    longDescription: string;
    image: ImageType;
    technologies: Technology[];
    testimonials: Testimonial[];
    links: Link[];
    projects: Project[];
    awards: Award[];
  };
}
