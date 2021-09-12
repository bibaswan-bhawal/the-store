import { getCatalogue, getSection, getItems } from './firebase.utils.js';

export const resolvers = {
    Query: {
        getCatalogue() {
            return getCatalogue();
        },
        collectionById(args) {
            return getSection(args.id);
        }
    },
    collection: {
        items(parent) {
            return getItems(parent.id);
        }
    }
}
