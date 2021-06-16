import React, { Component } from 'react';
import _ from "lodash";
import axios from "axios";

import { 
  View,
  Text, 
  Image, 
  ScrollView, 
  TouchableOpacity 
} from 'react-native';

// we can use also react-native-modal-dropdown module
import { Dropdown } from 'react-native-material-dropdown';

// we can use also react-native-data-table
import {
  Row,
  Rows,
  Table,
} from 'react-native-table-component';

// flow re-useable styles
import styles from '../../styles/StarWarsMovieStyles';
import { 
  Images,
  Colors,
  Metrics,
  ApplicationStyles, 
} from "../../Themes/";


class StarWarsMovie extends Component {
  constructor (props) {
    super(props);

    this.state = {
      dropData: [],
      tableData: [],
      introText: '',
      peoplesData: [],
      getMovieData: [],
      selectedItem: '',
      sortStatus: false,
      selectStatus: false,
      firstMovieDescription: '',
      selectedMovieDescription: '',
    }
  }

  componentDidMount() {
    /**
     * I was tried using redux+saga for call api
     * even if simple api
     */
    this.props.movieData();

    /**
     * getting swapi.co api peoples info
     * we can use redux saga or directly call in components
     */
    axios.get('https://swapi.co/api/people/?format=json')
      .then(response => {
        this.setState({ peoplesData: response.data.results })
      })
    
    this.introAnimation(0, 'A long time ago in a galaxy far, far away ...')
  }

  introAnimation = (index, text) => {
    this.setState({ introText: text.slice(0, index) })
    
    setTimeout(() => {
      this.introAnimation(index+1, text)
    }, 50)
  }

  componentWillReceiveProps({ getMovieData }) {
    if(getMovieData == null)
      return;
    this.handleCrawlPageData(getMovieData);
    this.setState({ getMovieData });
  }

  handleCrawlPageData = data => {

    // getting dropdown menu data 
    let dropData = [];
    let i = 0;
    data.map(item => {
      let title = { value: item.title };
      dropData.push(title);
    })
    this.setState({ dropData })

    // getting first movie description
    this.setState({ firstMovieDescription: data[0].opening_crawl });
  }

  handleDropdownChange = item => {
    
    // when users click the dropdown items
    this.setState({ selectedItem: item });
    this.handleTableData();
    this.handleMoviePageData(item);
  }

  handleMoviePageData = item => {
    const { getMovieData } = this.state;

    //getting selected items's description
    getMovieData.map(el => {
      if(item == el.title)
        this.setState({ selectedMovieDescription: el.opening_crawl })
    })
  }
 
  handleTableData = () => {

    // getting table datas
    const tableData = this.state.peoplesData.map(item => {
      let realFeet = ((item.height*0.393700) / 12);
      let feet = Math.floor(realFeet);
      let inches = Math.round((realFeet - feet) * 12);

      return {
        name: item.name, 
        gender: item.gender == 'n/a' ? 'F' : 'M', 
        height: `${item.height}cm (${feet}ft ${inches}in)` // for example 170 cm (5ft 6.93in)
      };
    })
    this.setState({ tableData })
  }

  handleSortTableData = () => {
    const { tableData, sortStatus } = this.state;

    // handle sort table datas by sortby state
    const sortVal = sortStatus ? 1 : -1
    tableData.sort((a,b) => a['name'] > b['name'] ? sortVal : -sortVal);
    this.setState({ 
      tableData, 
      sortStatus: !sortStatus 
    });
  }

  header = title => {
    return (
      <TouchableOpacity onPress={() => this.handleSortTableData()}>
        <View alignItems= { "center" }>
          <Text style={ styles.headerText }>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const { 
      dropData,
      introText,
      tableHead,
      widthArr,
      tableData,
      peoplesData,
      selectedItem,
      selectStatus,
      firstMovieDescription,
      selectedMovieDescription
    } = this.state;

    return (
      <View style={ApplicationStyles.screen.container}>
        <Text style={styles.title}>
          StarWarsMovies
        </Text>
        <View style={styles.mainContainer}>
          <Dropdown
            label='Select Movie'
            data={dropData}
            baseColor={Colors.mainColor}
            textColor={Colors.mainColor}
            selectedItemColor={Colors.background}
            value={selectedItem}
            onChangeText={(item) => { this.handleDropdownChange(item) }}
            dropdownPosition={2}
          />
          { !!selectedItem ? 
            <View flex={1}>
              <View style={styles.movieIntroView}>
                <ScrollView style={styles.movieIntroScroll}>
                  <Text style={styles.movieIntro}>
                    { selectedMovieDescription }
                  </Text>
                </ScrollView>
              </View>
              <View style={styles.tableContainer}>
                <ScrollView>
                  <Table borderStyle={{ borderColor: Colors.mainColor }}>
                    <Row
                      data={[
                        this.header('Name'),
                        this.header('Gender'),
                        this.header('Height')
                      ]}
                      style={styles.headerRow}
                    />
                    <Rows
                      data={tableData.map(({ name, gender, height }) => [name, gender, height])}
                      style={styles.rowsStyle}
                      textStyle={styles.tableText}
                    />
                  </Table>
                </ScrollView>
              </View>
            </View>
            :
            <View style={styles.crawlView}>
              <Text style={styles.introText}>
                {introText}
              </Text>
              <Image 
                style={styles.crawlImage}
                source={Images.logo} />
              <ScrollView style={styles.crawlScrollView}>
                <Text style={styles.crawlText}>
                  { firstMovieDescription }
                </Text>
              </ScrollView>
            </View>            
          }
        </View>
      </View>
    )
  }
}

export default StarWarsMovie;