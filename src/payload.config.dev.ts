import { buildConfig } from 'payload/config';
import Categories from './collections/Categories';
import Posts from './collections/Posts';
import Tags from './collections/Tags';
import Users from './collections/Users';

export default buildConfig({
  serverURL: 'https://api-2003e-3000.app.zerops.io',
  admin: {
    user: Users.slug,
  },
  collections: [
    Categories,
    Posts,
    Tags,
    Users,
  ],
});
