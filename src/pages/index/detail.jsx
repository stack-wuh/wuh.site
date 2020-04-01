import React, { Fragment } from 'react'
import styles from 'styles/list-detail.module.scss'
import { useFetch, useTitle } from '../../hooks'
import { mainDetailBy } from '../../api/map'
import PageLoading from '../../components/PageLoading'
import ShareBtns from 'components/ShareBtns'
import Markdown from 'components/Markdown'

function ArtDetail ({ match }) {
    const { params } = match

    const { data: { info = [] }, isLoading } = useFetch(`${mainDetailBy}`, {id: params.id})
    const _info = info.length && info[0]
    useTitle(`${_info.title || ''} ${_info.sub_title || ''}`, false)

    return (<Fragment>
        <div className={styles.list_detail}>
            {
                isLoading ?
                    (<PageLoading />) :
                    (<>
                        <div className={styles.header}>
                            <h3 className={styles.header_title}>{_info.title}</h3>
                        </div>
                        <div className={styles.box_wrapper}>
                            <img className={styles.box_wrapper_cover} src={_info.cover_img} alt="thumb"/>
                        </div>
                        {
                            _info.type === 1 &&
                            (<article
                                className={styles.article}
                                dangerouslySetInnerHTML={{__html: _info.content}}>
                            </article>)
                        }
                        {
                            _info.type === 2 &&
                            (<Markdown source={_info.content} />)
                        }
                        <ShareBtns />
                     </>
                    )
            }
        </div>
    </Fragment>)
}

export default ArtDetail