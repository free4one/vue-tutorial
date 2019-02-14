import Vue from 'vue';
import Router from 'vue-router';
import VueLodash from 'vue-lodash';
import Velocity from 'velocity-animate';

import HelloWorld from '@/components/HelloWorld';
import Tutorial from '@/components/Tutorial';
import ListenEvent from '@/components/ListenEvent';
import FormBinding from '@/components/FormBinding';
import RegComponent from '@/components/RegComponent';
import Parent from '@/components/Parent';
import CounterEvent from '@/components/CounterEvent';
import Speaks from '@/components/Speaks';
import UseCustomEvent from '@/components/UseCustomEvent';
import WrapperComponent from '@/components/WrapperComponent';
import TravelMain from '@/components/TravelMain';
import FadeDemo from '@/components/FadeDemo';
import CssTransition from '@/components/CssTransition';
import CstmTransitionCls from '@/components/CstmTransitionCls';
import JSTransition from '@/components/JSTransition';
import Fade from '@/components/Fade';
import LazySudoku from '@/components/LazySudoku';
import StaggeredListDemo from '@/components/StaggeredListDemo';
import DynamicTransition from '@/components/DynamicTransition';

const optLodash = { name: 'lodash' }; // customize the way you want to call it
const optVelocity = { name: 'velocity' };

Vue.use(Router);
Vue.use(VueLodash, optLodash); // options is optional
Vue.use(Velocity, optVelocity);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/tutorial',
      name: 'Tutorial',
      component: Tutorial,
    },
    {
      path: '/listenEvent',
      name: 'ListenEvent',
      component: ListenEvent,
    },
    {
      path: '/formBinding',
      name: 'FormBinding',
      component: FormBinding,
    },
    {
      path: '/regComponent',
      name: 'RegComponent',
      component: RegComponent,
    },
    {
      path: '/parent',
      name: 'Parent',
      component: Parent,
    },
    {
      path: '/counterEvent',
      name: 'CounterEvent',
      component: CounterEvent,
    },
    {
      path: '/speaks',
      name: 'Speaks',
      component: Speaks,
    },
    {
      path: '/useCustomEvent',
      name: 'UseCustomEvent',
      component: UseCustomEvent,
    },
    {
      path: '/wrapperComponent',
      name: 'WrapperComponent',
      component: WrapperComponent,
    },
    {
      path: '/travel',
      name: TravelMain,
      component: TravelMain,
    },
    {
      path: '/fadeDemo',
      name: FadeDemo,
      component: FadeDemo,
    },
    {
      path: '/cssTransition',
      name: CssTransition,
      component: CssTransition,
    },
    {
      path: '/cstmTransitionCls',
      name: CstmTransitionCls,
      component: CstmTransitionCls,
    },
    {
      path: '/jstransition',
      name: JSTransition,
      component: JSTransition,
    },
    {
      path: '/fade',
      name: Fade,
      component: Fade,
    },
    {
      path: '/lazysudoku',
      name: LazySudoku,
      component: LazySudoku,
    },
    {
      path: '/staggeredListDemo',
      name: StaggeredListDemo,
      component: StaggeredListDemo,
    },
    {
      path: '/dynamicTransition',
      name: DynamicTransition,
      component: DynamicTransition,
    },
  ],
});
