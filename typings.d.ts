interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAT: string;
}

interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference'
  }
}

export interface Social extends SanityBody {
  _type: 'social';
  title: string;
  url: string;
}

export interface PageInfo extends SanityBody {
  _type: 'pageInfo';
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  profilePic: Image;
}

export interface Technology extends SanityBody {
  _type: 'skill';
  image: Image;
  title: string;
}

export interface Skill extends SanityBody {
  _type: 'skill';
  image: Image;
  title: string;
  certificate: string;
}

export interface Project extends SanityBody {
  title: string;
  _type: 'project';
  image: Image;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
}

