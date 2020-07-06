import React from 'react';
import classnames from 'classnames';
import _ from 'lodash';

import Loading from '@/components/Loading';
import ProductFlip from '@/components/ProductFlip';

import $style from './index.module.scss';

function Products({ className, products, title }) {
  if (_.isEmpty(products)) {
    return <Loading />;
  }

  return (
    <div className={classnames(className, $style.products)}>
      {title && <div className={$style.title}>{title}</div>}
      <div className={$style.list}>
        {products.map(p => (
          <ProductFlip className={$style.product} key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default Products;
