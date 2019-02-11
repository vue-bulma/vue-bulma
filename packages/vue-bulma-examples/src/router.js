import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/docs'
    },
    {
      path: '/docs',
      name: 'Docs',
      component: () => import('./views/Docs'),
      children: [
        // Columns
        {
          path: 'columns/column',
          name: 'Column',
          component: () => import('./views/columns/Column')
        },

        // Layouts
        {
          path: '/docs/layout/hero',
          name: 'Hero',
          component: () => import('./views/layout/Hero'),
          meta: { fullwidth: true }
        },
        {
          path: '/docs/layout/container',
          name: 'Container',
          component: () => import('./views/layout/Container'),
          meta: { fullwidth: true }
        },
        {
          path: 'layout/level',
          name: 'Level',
          component: () => import('./views/layout/Level')
        },
        {
          path: 'layout/media',
          name: 'MediaObject',
          component: () => import('./views/layout/Media')
        },

        {
          path: 'layout/section',
          name: 'Section',
          component: () => import('./views/layout/Section')
        },
        {
          path: 'layout/footer',
          name: 'Footer',
          component: () => import('./views/layout/Footer')
        },
        {
          path: 'layout/tile',
          name: 'Tile',
          component: () => import('./views/layout/tile/index')
        },

        // Form
        {
          path: 'form',
          name: 'Form',
          component: () => import('./views/form/form/index')
        },
        {
          path: 'form/input',
          name: 'Input',
          component: () => import('./views/form/Input')
        },
        {
          path: 'form/textarea',
          name: 'Textarea',
          component: () => import('./views/form/Textarea')
        },
        {
          path: 'form/select',
          name: 'Select',
          component: () => import('./views/form/Select')
        },
        {
          path: 'form/checkbox',
          name: 'Checkbox',
          component: () => import('./views/form/Checkbox')
        },
        {
          path: 'form/radio',
          name: 'Radio',
          component: () => import('./views/form/Radio')
        },
        {
          path: 'form/file',
          name: 'File',
          component: () => import('./views/form/File')
        },

        // Elements
        {
          path: 'elements/box',
          name: 'Box',
          component: () => import('./views/elements/Box')
        },
        {
          path: 'elements/button',
          name: 'Button',
          component: () => import('./views/elements/Button')
        },
        {
          path: 'elements/content',
          name: 'Content',
          component: () => import('./views/elements/Content')
        },
        {
          path: 'elements/delete',
          name: 'Delete',
          component: () => import('./views/elements/Delete')
        },
        {
          path: 'elements/icon',
          name: 'Icon',
          component: () => import('./views/elements/Icon')
        },
        {
          path: 'elements/image',
          name: 'Image',
          component: () => import('./views/elements/Image')
        },
        {
          path: 'elements/notification',
          name: 'Notification',
          component: () => import('./views/elements/Notification')
        },
        {
          path: 'elements/progress',
          name: 'ProgressBars',
          component: () => import('./views/elements/Progress')
        },
        // {
        //   path: 'elements/table',
        //   name: 'Table',
        //   component: () => import('./views/elements/table/index')
        // },
        {
          path: 'elements/tag',
          name: 'Tag',
          component: () => import('./views/elements/Tag')
        },
        {
          path: 'elements/title',
          name: 'Title',
          component: () => import('./views/elements/Title')
        },

        // Components
        {
          path: 'components/breadcrumb',
          name: 'Breadcrumb',
          component: () => import('./views/components/Breadcrumb')
        },
        {
          path: 'components/card',
          name: 'Card',
          component: () => import('./views/components/Card')
        },
        {
          path: 'components/dropdown',
          name: 'Dropdown',
          component: () => import('./views/components/Dropdown')
        },
        {
          path: 'components/menu',
          name: 'Menu',
          component: () => import('./views/components/menu/index')
        },
        {
          path: 'components/message',
          name: 'Message',
          component: () => import('./views/components/Message')
        },
        {
          path: 'components/modal',
          name: 'Modal',
          component: () => import('./views/components/Modal')
        },
        {
          path: 'components/navbar',
          name: 'Navbar',
          component: () => import('./views/components/Navbar'),
          meta: { fullwidth: true }
        },
        {
          path: 'components/pagination',
          name: 'Pagination',
          component: () => import('./views/components/Pagination')
        }
        // {
        //   path: 'components/panel',
        //   name: 'Panel',
        //   component: () => import('./views/components/Panel')
        // },
        // {
        //   path: 'components/tabs',
        //   name: 'Tabs',
        //   component: () => import('./views/components/Tabs')
        // },
      ]
    }
  ]
})
