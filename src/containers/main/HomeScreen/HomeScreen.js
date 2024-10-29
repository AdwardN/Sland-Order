import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import R from 'reactotron-react-native';
import moment from 'moment';

import styles from './styles';
import SearchInput from './components/SearchInput';
import ListData from './components/ListData';
import ModalType from './components/ModalType';
import {replaceScreen} from '../../../redux/navigation/navigationRedux';
import {getListOrder} from '../../../redux/order/redux/getListOrder';
import {OrderStatus} from '../../../helpers/Constants';

export class HomeScreen extends Component {
  static navigationOptions = ({navigation, navigationOptions}) => ({
    title: 'Đơn hàng'.toUpperCase(),
  });

  state = {
    pageNumber: 0,
    visibleType: false,
    dateFrom: '2000-01-01',
    dateTo: moment().format('YYYY-MM-DD'),
    type: OrderStatus.ALL,
    keyword: '',
  };

  componentDidMount = () => {
    this.props.getListOrder(
      this.props.user.itS_REC_KH,
      this.state.keyword,
      this.state.type,
      this.state.dateFrom,
      this.state.dateTo,
      this.state.pageNumber,
      true,
    );
  };

  componentWillReceiveProps = nextProps => {
    if (this.props.refreshFlag != nextProps.refreshFlag) {
      this.setState({pageNumber: 0, keyword: ''}, () => {
        this.searchInput.clear();
        this.props.getListOrder(
          this.props.user.itS_REC_KH,
          this.state.keyword,
          this.state.type,
          this.state.dateFrom,
          this.state.dateTo,
          this.state.pageNumber,
          true,
        );
      });
    }
  };

  _onPressAdd = () => {
    this.props.replaceScreen('CreateOrderScreen');
  };

  _onRefresh = () => {
    this.setState({pageNumber: 0}, () => {
      this.props.getListOrder(
        this.props.user.itS_REC_KH,
        this.state.keyword,
        this.state.type,
        this.state.dateFrom,
        this.state.dateTo,
        this.state.pageNumber,
        true,
      );
    });
  };

  _onLoadMore = () => {
    if (this.props.isLoadMore) {
      this.setState({pageNumber: this.state.pageNumber + 1}, () => {
        this.props.getListOrder(
          this.props.user.itS_REC_KH,
          this.state.keyword,
          this.state.type,
          this.state.dateFrom,
          this.state.dateTo,
          this.state.pageNumber,
          false,
        );
      });
    }
  };

  _onPressItem = data => {
    this.props.replaceScreen('OrderDetailScreen', {
      order: data,
    });
  };

  _onFilter = (statusOrderId, dateFrom, dateTo, isDate) => {
    this.setState(
      {
        dateFrom,
        dateTo,
        type: statusOrderId,
        pageNumber: 0,
        visibleType: false,
      },
      () => {
        this.props.getListOrder(
          this.props.user.itS_REC_KH,
          this.state.keyword,
          this.state.type,
          this.state.dateFrom,
          this.state.dateTo,
          this.state.pageNumber,
          true,
        );
      },
    );
  };

  _changeTypeModal = status => {
    this.setState({visibleType: status});
  };

  _onKeywordChange = keyword => {
    clearTimeout(this.search);

    this.search = setTimeout(() => {
      this.setState({keyword, pageNumber: 0}, () => {
        this.props.itS_REC_KH,
          this.props.getListOrder(
            this.props.user.itS_REC_KH,
            this.state.keyword,
            this.state.type,
            this.state.dateFrom,
            this.state.dateTo,
            this.state.pageNumber,
            true,
          );
      });
    }, 600);
  };

  render() {
    const {orders, isLoading, loadEnd} = this.props;

    return (
      <View style={styles.container}>
        <SearchInput
          ref={searchInput => (this.searchInput = searchInput)}
          onPressAdd={this._onPressAdd}
          show={this._changeTypeModal}
          onKeywordChange={this._onKeywordChange}
        />
        <ListData
          data={orders}
          loadEnd={loadEnd}
          onLoadMore={this._onLoadMore}
          isLoading={isLoading}
          onRefresh={this._onRefresh}
          onPressItem={this._onPressItem}
        />
        <ModalType
          close={this._changeTypeModal}
          visible={this.state.visibleType}
          filter={this._onFilter}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.loginWithEmail.user,
  orders: state.getListOrder.orders,
  isLoading: state.getListOrder.isLoading,
  isLoadMore: state.getListOrder.isLoadMore,
  refreshFlag: state.getListOrder.refreshFlag,
  loadEnd: state.getListOrder.loadEnd,
});

const mapDispatchToProps = {
  replaceScreen,
  getListOrder,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
