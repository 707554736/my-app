export const activity = [
  {
    path: '/activity',
    name: '运营活动',
    icon: 'FormOutlined',
    routes: [
      {
        path: '/activity/manage',
        name: '活动管理',
        component: './activity/manage',
        authority: ['activity.manage.see'],
      },
      {
        path: '/activity/list',
        name: '活动数据',
        component: './activity/list',
        authority: ['activity.data.view'],
      },
    ],
  },
];
