import React, { Suspense } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { Layout } from '@/app/layouts';
import { Spinner } from '@/shared';

const importPageModule = (): Promise<{
  Home: React.ComponentType;
  Article: React.ComponentType;
  NotFound: React.ComponentType;
}> => import('@/pages');

const Home = React.lazy(() => importPageModule().then((module) => ({ default: module.Home })));
const Article = React.lazy(() =>
  importPageModule().then((module) => ({ default: module.Article }))
);
const NotFound = React.lazy(() =>
  importPageModule().then((module) => ({ default: module.NotFound }))
);

export const AppRouter = () => (
  <BrowserRouter>
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/article/:id' component={Article} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Suspense>
    </Layout>
  </BrowserRouter>
);
