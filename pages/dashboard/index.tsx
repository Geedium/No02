import Head from 'next/head'
import { Menu, Segment, Sidebar, Icon } from 'semantic-ui-react'

export default function Dashboard() : JSX.Element {
  return (<>
  <Head>
    <title>Dashboard</title>
  </Head>

  <Sidebar.Pushable as={Segment} vertical>
      <Sidebar
        as={Menu}
        icon='labeled'
        direction='left'
        inverted
        vertical
        visible
        width='thin'>
          <Menu.Item as='a'>
            <Icon name='home'/>
            Home
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='chart line'/>
            Analytics
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='users'/>
            Users
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='sticky note'/>
            Orders
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='address card'/>
            Customers
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher>
          <Segment basic inverted>
          <Menu size='large' stackable fixed={'top'} inverted>
            <Menu.Item
              name='home'
              active={false}
            />
          </Menu>
          </Segment>
        </Sidebar.Pusher>
    </Sidebar.Pushable>
  </>)
}