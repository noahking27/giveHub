import React, { Component } from 'react';
import LayoutContentWrapper from '../components/utility/layoutWrapper';
import LayoutContent from '../components/utility/layoutContent';
import { Carousel } from 'antd';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  carousel: {
      backgroundColor: 'red',
      textAlign: 'center',
      height: '160px',
      lineHeight: '160px',
      background: '#364d79',
      overflow: 'hidden'
  }
});

export default class extends Component {
  render() {
    return (
      <LayoutContentWrapper style={{ height: '100vh' }}>
        <LayoutContent>
          <h1>GIVEHUB</h1>
          <Carousel autoplay className={css(styles.carousel)}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
