import { useEffect, useState } from "react";
import AboutSection from "../components/AboutSection";
import AwardSection from "../components/AwardSection";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import TechnologiesSection from "../components/TechnologiesSection";
import TestimonialSection from "../components/TestimonialSection";
import { sanityClient } from "../sanity";
import { gql } from "@apollo/client";

export default function HomePage() {
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [image, setImage] = useState<Image>();
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [links, setLinks] = useState<Link[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [awards, setAwards] = useState<Award[]>([]);

  function parseData(data: any) {
    const { allProject, allAward, allTestimonial, allSettings } = data;
    setProjects(allProject);
    setTestimonials(allTestimonial);
    const _awards = allAward.map((award: any) => ({
      title: award.title,
      description: award.description,
      date: new Date(award.date),
      event: award.event,
    }));
    setAwards(_awards);
    setShortDescription(allSettings[0].short_description);
    setLongDescription(allSettings[0].long_description);
    setImage(allSettings[0].image);
    setTechnologies(allSettings[0].technologies);
    setLinks(allSettings[0].links);
  }

  useEffect(() => {
    (async () => {
      // const data = await (await fetch("/data.json")).json();

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

      console.log(data);

      parseData(data);
    })();
  }, []);

  return (
    <>
      <HeroSection shortDescription={shortDescription} links={links} />
      <AboutSection image={image} longDescription={longDescription} />
      <AwardSection awards={awards} />
      <ProjectSection projects={projects} />
      <TestimonialSection testimonials={testimonials} />
      <TechnologiesSection technologies={technologies} />
      <ContactSection />
    </>
  );
}
