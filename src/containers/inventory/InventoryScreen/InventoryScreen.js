import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import r from 'reactotron-react-native';
import moment from 'moment';

import styles from './styles';
import {AppText, Divider, EmptyData} from '../../../components';
import Header from '../components/Header';
import RenderInventoryScreen from '../RenderInventoryScreen';
import {replaceScreen} from '../../../redux/navigation/navigationRedux';
import {getListInventory} from '../../../redux/inventory/redux/getListInventory';
import string from '../../i18n/vn';
import {Colors, Fonts} from '../../../themes';
import {searchProd} from '../../../redux/order/redux/searchProd';
import SearchForm from '../components/SearchForm';
import {
  getInventory,
  clear,
} from '../../../redux/inventory/redux/SearchInventory';

export class InventoryScreen extends Component {
  state = {
    pageNumber: 0,
    isSearch: false,
    keyword: '',
    isRefresh: false,
  };

  static navigationOptions = ({navigation}) => ({
    title: 'Tồn kho'.toUpperCase(),
  });

  componentDidMount() {
    if (!this.state.keyword) {
      this.props.getListInventory(
        this.props.user.itS_REC_KHO,
        this.state.pageNumber,
        true,
      );
    } else {
      this.props.getInventory(
        this.props.user.itS_REC_KHO,
        this.props.inventory.itS_REC_VT,
      );
    }
  }

  componentWillReceiveProps = nextProps => {
    if (this.props.refreshFlag != nextProps.refreshFlag) {
      this.setState({pageNumber: 0}, () => {
        this.searchHeader.clear();
        this.props.getListInventory(
          this.props.user.itS_REC_KHO,
          this.state.pageNumber,
          true,
        );
        this.props.clear();
      });
    }
  };

  _onInsertForm = () => {
    this.props.replaceScreen('InsertInventoryScreen', {
      data:
        this.props.inventory.length > 0
          ? this.props.inventory
          : this.props.inventories,
    });
  };

  _onSearch = keyword => {
    this.setState({keyword: keyword});
    this.props.getListInventory(this.props.user.itS_REC_KHO, 0, true);
    this.props.searchProd(keyword, 0, true);
  };

  _onResult = item => {
    this.searchHeader.inputBlur();
    this.props.getInventory(this.props.user.itS_REC_KHO, item);
    this.props.searchProd('', 0, true);
    this.setState({isSearch: false, keyword: item});
  };

  _onFocus = status => {
    this.setState({isSearch: status});
    if (!status) {
      this.props.getListInventory(this.props.user.itS_REC_KHO, 0, true);
      this.props.clear();
      this.setState({keyword: ''});
    }
  };
  _onloadMore = () => {
    this.setState({pageNumber: this.state.pageNumber + 1}, () => {
      if (this.state.pageNumber * 8 <= this.props.total) {
        this.props.getListInventory(
          this.props.user.itS_REC_KHO,
          this.state.pageNumber,
        );
      }
    });
  };

  _onRefresh = () => {
    this.setState({pageNumber: 0, isRefresh: true}, () => {
      this.props.getListInventory(
        this.props.user.itS_REC_KHO,
        this.state.pageNumber,
        true,
      );
      this.setState({isRefresh: false});
    });
  };

  render() {
    const {inventories, searchResult, inventory, loadEnd} = this.props;
    const {isSearch, isRefresh} = this.state;

    const data = this.state.keyword ? inventory : inventories;

    return (
      <View style={styles.container}>
        <Header
          ref={searchHeader => (this.searchHeader = searchHeader)}
          search={this._onSearch}
          focus={this._onFocus}
          insertForm={this._onInsertForm}
          detail={this._onResult}
          isSearch={isSearch}
        />
        <RenderInventoryScreen
          loadEnd={loadEnd}
          isSearch={isSearch}
          inventories={data}
          showInput={false}
          onEndReachedThreshold={0}
          onEndReached={this._onloadMore}
          onRefresh={this._onRefresh}
          refreshing={isRefresh}
        />
        {isSearch ? (
          <SearchForm detail={this._onResult} data={searchResult} />
        ) : null}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.loginWithEmail.user,
    inventories: state.getListInventory.inventories,
    total: state.getListInventory.total,
    searchResult: state.searchProd.products,
    inventory: state.searchInventory.inventory,
    refreshFlag: state.getListInventory.refreshFlag,
    loadEnd: state.getListInventory.loadEnd,
  };
};

const mapDispatchToProps = {
  replaceScreen,
  getListInventory,
  searchProd,
  getInventory,
  clear,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InventoryScreen);
