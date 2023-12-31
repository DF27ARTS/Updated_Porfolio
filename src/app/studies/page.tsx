"use client";

import CertificationCard from "@/components/studies/CertificationCard";
import { certifications } from "../../assets/certification/certifications";

const Studies = () => {
  return (
    <section className="studies-container">
      {certifications.map((certification, index) => {
        return (
          <CertificationCard
            key={index}
            title={certification.title}
            image={certification.image}
            academy={certification.academy}
            date={certification.date}
          />
        );
      })}
    </section>
  );
};

export default Studies;
