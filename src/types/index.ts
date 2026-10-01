export type ProjectCategory = 'all' | 'fullstack' | 'cybersecurity' | 'mobile' | 'academic' | 'creative';

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: 'fullstack' | 'cybersecurity' | 'mobile' | 'academic' | 'creative';
  description: string;
  keyFeatures: string[];
  techStack: string[];
  githubUrl?: string;
  backendGithubUrl?: string;
  liveUrl?: string;
  backendLiveUrl?: string;
  isConcept?: boolean;
  isInProgress?: boolean;
  roleBadge?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  verifyUrl?: string;
  category: 'cybersecurity' | 'software' | 'frontend' | 'ai';
  credentialId?: string;
  instructor?: string;
  badge?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level?: 'Fundamentals' | 'Intermediate' | 'Proficient' | 'Exploring';
    tag?: string;
  }[];
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  institution: string;
  location: string;
  type: 'education' | 'cyber' | 'projects' | 'community';
  description: string;
  highlights: string[];
}

export interface CyberTrack {
  stage: string;
  title: string;
  status: 'Active Learning' | 'Hands-on Labs' | 'Upcoming';
  description: string;
  keyTopics: string[];
  tools: string[];
}
