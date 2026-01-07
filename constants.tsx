import { Brain, Code, Globe, Heart, Leaf, LineChart, MapPin, Database, Server, PenTool, Scissors, Plane } from 'lucide-react';
import React from 'react';

export const PERSONAL_INFO = {
  name: "Tian Xu",
  title: "Data Analyst & Quantitative Researcher",
  location: "New York, NY",
  origin: "Chengdu, China",
  email: "tianx0117@gmail.com",
  phone: "(530) 953-1939",
  linkedin: "www.linkedin.com/in/tianxu2229/",
  bio: "I am an INFJ who finds balance between data and creativity. Originally from Chengdu, I bring a unique blend of quantitative rigor and human-centric insight to analysis. When I'm not coding, you'll find me crafting, exploring nature, or playing with my two cats.",
  traits: [
    { label: "INFJ", icon: <Brain className="w-4 h-4" /> },
    { label: "Nature Lover", icon: <Leaf className="w-4 h-4" /> },
    { label: "Hand Crafting", icon: <Scissors className="w-4 h-4" /> },
    { label: "Traveling", icon: <Plane className="w-4 h-4" /> },
  ]
};

export const SKILLS = {
  programming: ["Python (NumPy, Pandas, Scikit-learn, TensorFlow)", "R (Shiny, Tidyverse)", "SQL", "Git"],
  methodologies: ["Machine Learning", "Deep Learning", "NLP", "A/B Testing", "ETL", "Statistical Inference"],
  tools: ["Tableau", "PowerBI", "AWS", "Snowflake", "Databricks", "Google Analytics", "Excel"]
};

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  achievements: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "L'Occitane Group",
    role: "Customer Data Analyst",
    location: "New York, NY",
    period: "Jan 2024 - Present",
    achievements: [
      "Designed and deployed an AI-driven analytics dashboard architecture (Python API + web UI), enabling automated metric computation.",
      "Fine-tuned an LLM on customer logs to detect sentiment and intent, cutting manual review effort by 90%.",
      "Built a discount sensitivity model and markdown ladders to move aging stock without hurting margins.",
      "Built automated personalized direct mail workflow driving $820K net sales.",
      "Forecasted web sales with Prophet, improving accuracy by 15%."
    ]
  },
  {
    company: "L'Occitane Group",
    role: "Data Analyst Coordinator",
    location: "New York, NY",
    period: "May 2023 - Sep 2023",
    achievements: [
      "Analyzed 3,000+ surveys using NLP, leading to a 10% improvement in survey effectiveness.",
      "Automated budget data management (ETL) using BigQuery, KNIME, and Snowflake, saving ~5 hours/week.",
      "Developed dynamic Looker Studio dashboards for landing page monitoring."
    ]
  },
  {
    company: "L'Occitane Group",
    role: "Data Analyst Intern",
    location: "New York, NY",
    period: "Feb 2023 - May 2023",
    achievements: [
      "Developed an XGBoost pipeline to predict second purchase likelihood (0.75 AUC).",
      "Analyzed purchasing patterns using AI methods to inform product refill strategies."
    ]
  },
  {
    company: "MyH2O Water Information Network",
    role: "Data Analyst",
    location: "Beijing, China",
    period: "Sep 2021 - Apr 2022",
    achievements: [
      "Administered comprehensive surveys (400+ responses) and managed MySQL database.",
      "Crafted an interactive Tableau Story with 3 dashboards and 20+ sheets, improving donation conversion."
    ]
  },
  {
    company: "China Telecommunications Corporation",
    role: "Data Analyst",
    location: "Beijing, China",
    period: "Jun 2021 - Aug 2021",
    achievements: [
      "Developed 9 advanced Tableau dashboards for Omnichannel analysis.",
      "Performed anomaly detection to uncover distribution channel issues and high refund rates."
    ]
  }
];

export interface EducationItem {
  school: string;
  degree: string;
  location: string;
  period: string;
  details: string;
}

export const EDUCATION: EducationItem[] = [
  {
    school: "Columbia University",
    degree: "Master of Art - Quantitative Methods in Social Science",
    location: "New York, NY",
    period: "Sep 2022 - Feb 2024",
    details: "GPA: 4.0/4.0. Coursework: Machine Learning, NLP, Applied Data Science."
  },
  {
    school: "University of California, Davis",
    degree: "Bachelor of Science - Statistics",
    location: "Davis, CA",
    period: "Sep 2018 - April 2022",
    details: "Major GPA: 3.7/4.0. Coursework: Time Series, Regression Analysis, Data Structures."
  }
];

export interface PublicationItem {
  title: string;
  doi?: string;
  description: string;
}

export const PUBLICATIONS: PublicationItem[] = [
  {
    title: 'Research on Developmental Evaluation Based on the "Four Abilities" Model',
    doi: "10.1007/s11135-023-01665-0",
    description: "Developed a novel framework for assessing researchers using Propensity Score Matching (PSM) in Python to control for self-selection bias."
  },
  {
    title: "Will Career Plateau Lead to Employee Silence?",
    doi: "10.1108/NBRI-04-2022-0036",
    description: "Analyzed workplace dynamics using hierarchical regression and Bootstrap methods to test mediating variables."
  },
  {
    title: "Exploring How Esports Work as a Business Activity in China",
    doi: "10.6918/IJOSSER.202103_4(3).0066",
    description: "Integrated open systems theory and SWOT analysis to dissect China's esports market dynamics."
  },
  {
    title: "How Does the Bitcoin Sentiment Index of Fear and Greed Affect Bitcoin Returns?",
    doi: "10.22495/cocv21i2art10",
    description: "Analyzed Bitcoin Sentiment Index using ARDL method, incorporating economic policy uncertainty variables."
  }
];

export const PROJECTS = [
  {
    title: "Master Thesis: Amazon Reviews Analysis",
    period: "Sep 2023 - Dec 2023",
    role: "Researcher",
    description: "Studied impact of subjective/objective elements on review helpfulness using ML/DL techniques and GLM."
  },
  {
    title: "Movie Review and Prediction",
    period: "Jan 2023 - Apr 2023",
    role: "Developer",
    description: "Constructed Python pipeline for score prediction (89% accuracy) and used LDA for topic modeling."
  },
  {
    title: "NLP Study on School Discipline Policy",
    period: "Sep 2022 - Dec 2022",
    role: "Analyst",
    description: "Conducted text mining on 500+ school codes of conduct to examine relationships with student performance."
  }
];
