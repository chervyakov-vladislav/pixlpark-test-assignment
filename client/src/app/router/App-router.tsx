import React, { Suspense } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { Layout } from '@/app/layouts';

const Home = React.lazy(() => import('@/pages/Home/Home'));
const Article = React.lazy(() => import('@/pages/Article/Article'));
const NotFound = React.lazy(() => import('@/pages/NotFound/NotFound'));

export const AppRouter = () => (
  <BrowserRouter>
    <Layout>
      <Suspense fallback='Loading...'>
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/article/:id' render={() => <Article />} />
          <Route path='*' render={() => <NotFound />} />
        </Switch>
      </Suspense>
    </Layout>
  </BrowserRouter>
);
