import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import ListItem from './components/listItem'
import { fetchArtList } from '../../redux/action/article'
import { renderRoutes } from 'react-router-config'
import { useFetch, useTitle } from '../../hooks'
import { mainList } from '../../api/map'
import PageLoading from '../../components/PageLoading'
import lazy from 'utils/lazy'
import { ListItemEmpty } from 'components/List'

function Index ({ fetcher, fetchArtList, dispatch, route, ...args}) {
    const { data: { data }, isLoading } = useFetch(mainList)
    useTitle('吾生而有涯，而知无涯', false)
    useEffect(() => {
        lazy()
    })

    if (isLoading) {
        return (<PageLoading />)
    }

    if (!isLoading && !data) {
        return <ListItemEmpty />
    }

    return (<Fragment>
        {
            Array.isArray(data) && data.map(v => (<ListItem data={v} key={v._id}></ListItem>))
        }
        {
            renderRoutes(route.routes)
        }
    </Fragment>)
}

const mapStateToProps = ({ ARTICLE }) => {
    return {
        ...ARTICLE
    }
}
const mapDispatchToProps = dispatch => {
    return {
        dispatch,
        fetchArtList
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)