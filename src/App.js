import React from 'react';
import { connect } from "react-redux";

import { getItemList } from './store/actions';

import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Graph from './components/Graph';
import Listings from './components/Listings';

class App extends React.Component {
    state = {
        data: this.props.sales
    }

    componentDidMount() {
        this.props.getItemList();
    };

    render () {
        const sbProps = {
            id:         this.props.id,
            image:      this.props.image,
            title:      this.props.title,
            subtitle:   this.props.subtitle,
            tags:       this.props.tags
        }
        let theSales = { sales: [], keys: []};

        if (this.props.sales.length > 0) {
            let objKeys = Object.keys(this.props.sales[0]);
            theSales = {
                sales:      this.props.sales,
                keys:       objKeys
            }
        }

        return (
            <div className="App">
                <Header />
                <section>
                    <Sidebar {...sbProps} />
                    <main>
                        <Graph {...theSales} />
                        <Listings {...theSales} />
                    </main>
                </section>
                <Footer />
            </div>
        )
    };
}

const mapStateToProps = state => {
    return {
        error:      state.itemReducer.error,
        id:         state.itemReducer.id,
        title:      state.itemReducer.title,
        image:      state.itemReducer.image,
        subtitle:   state.itemReducer.subtitle,
        brand:      state.itemReducer.brand,
        reviews:    state.itemReducer.reviews,
        retailer:   state.itemReducer.retailer,
        details:    state.itemReducer.details,
        tags:       state.itemReducer.tags,
        sales:      state.itemReducer.sales,
    }
};

export default connect( mapStateToProps, { getItemList } )(App);
