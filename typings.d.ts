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
  imageAlt: string;
  name: string;
  profilePic: Image;
  profilePicAlt: string;
}

export interface Technology extends SanityBody {
  _type: 'skill';
  image: Image;
  imageAlt: string;
  title: string;
}

export interface Skill extends SanityBody {
  _type: 'skill';
  image: Image;
  imageAlt: string;
  title: string;
  certificate: string;
}

export interface Project extends SanityBody {
  title: string;
  _type: 'project';
  image: Image;
  imageAlt: string;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
}

