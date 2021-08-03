import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

import withSpinner from '../withSpinner/withSpinner';
import CollectionsOverview from './collections-overview';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    withSpinner,
)(CollectionsOverview);

export default CollectionsOverviewContainer;