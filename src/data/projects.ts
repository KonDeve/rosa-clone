export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  client: string;
  coverImage: string;
  description: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  gallery: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "speaker",
    slug: "speaker",
    title: "Speaker",
    category: "Product Renders",
    year: "2024",
    client: "SoundCore Labs",
    coverImage: "/assets/speaker3.webp",
    description:
      "This case study demonstrates the power of 3D design in transforming architectural concepts into compelling visual narratives. By combining technical expertise with a collaborative approach, I was able to deliver a product that not only met but exceeded the client's expectations.",
    challenge:
      "The client required high-fidelity visual representations of an audiophile acoustic sound sculpture. The primary challenge was rendering micro-perforated acoustic mesh, brushed aluminum edges, and realistic fabric tension under complex studio illumination.",
    solution:
      "Leveraging high-density procedural texturing and customized anisotropic shading, we established photorealistic specular highlights and authentic material depth.",
    deliverables: [
      "Photorealistic 3D Modelling",
      "Studio Lighting & Texturing",
      "Close-up Macro Renders",
      "Motion Turnaround Sequences"
    ],
    gallery: [
      "/assets/speaker2.webp",
      "/assets/speaker3.webp",
      "/assets/speaker.webp"
    ]
  },
  {
    id: "package",
    slug: "package",
    title: "Package",
    category: "Brand Identity",
    year: "2024",
    client: "Minimal Goods",
    coverImage: "/assets/wrapped.webp",
    description:
      "This case study demonstrates the power of 3D design in transforming architectural concepts into compelling visual narratives. By combining technical expertise with a collaborative approach, I was able to deliver a product that not only met but exceeded the client's expectations.",
    challenge:
      "Replicating the delicate fiber grain of recycled paper pulp alongside spot-gloss UV foils and realistic folds required bespoke physical material calibrations.",
    solution:
      "Utilizing micro-displacement maps and multi-layer dielectric shaders, we achieved authentic surface imperfection and soft tactile light diffusion across the product packaging suite.",
    deliverables: [
      "Packaging Form Development",
      "Texture Calibration",
      "Brand Mockup Suite",
      "Lookbook Renders"
    ],
    gallery: [
      "/assets/wrapped2.webp",
      "/assets/wrapped3.webp",
      "/assets/wrapped.webp"
    ]
  },
  {
    id: "printer",
    slug: "printer",
    title: "Printer",
    category: "Industrial Design",
    year: "2023",
    client: "FormWorks",
    coverImage: "/assets/printer2.webp",
    description:
      "This case study demonstrates the power of 3D design in transforming architectural concepts into compelling visual narratives. By combining technical expertise with a collaborative approach, I was able to deliver a product that not only met but exceeded the client's expectations.",
    challenge:
      "Balancing mechanical authenticity with an approachable design aesthetic. Every hinge, capacitive interface, and thermal vent was engineered to look functionally plausible while adhering to minimalist design ideals.",
    solution:
      "Developed a cohesive industrial CMF (Color, Material, Finish) palette featuring matte polycarbonate, tinted glass elements, and laser-etched indicator accents.",
    deliverables: [
      "Industrial CAD Translation",
      "CMF Material Study",
      "Exploded Component Diagrams",
      "Visual Identity Assets"
    ],
    gallery: [
      "/assets/printer.webp",
      "/assets/printer2.webp",
      "/assets/printer3.webp"
    ]
  },
  {
    id: "scapes",
    slug: "scapes",
    title: "Scapes",
    category: "Environment Visualization",
    year: "2023",
    client: "Voxel Realm",
    coverImage: "/assets/scapes3.webp",
    description:
      "This case study demonstrates the power of 3D design in transforming architectural concepts into compelling visual narratives. By combining technical expertise with a collaborative approach, I was able to deliver a product that not only met but exceeded the client's expectations.",
    challenge:
      "Creating colossal terrains with natural rock stratification, procedural weathering, and complex atmospheric scattering across broad focal lengths.",
    solution:
      "Sculpted custom heightmaps combined with volumetric cloud simulations and spectral sunlight modeling, producing immersive panoramic environmental renders.",
    deliverables: [
      "Procedural Terrain Generation",
      "Volumetric Lighting Setup",
      "Architectural Integration",
      "Large-Format Art Prints"
    ],
    gallery: [
      "/assets/scapes2.webp",
      "/assets/scapes3.webp",
      "/assets/scapes.webp",
      "/assets/scapes4.webp"
    ]
  }
];
