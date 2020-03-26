import React, { useEffect, useState, Fragment } from 'react'
import styles from 'styles/list-detail.module.scss'
import ReactMarkdown from 'react-markdown'
import { useFetch, useTitle } from '../../hooks'
import { mainDetailBy } from '../../api/map'
import PageLoading from '../../components/PageLoading'
import ShareBtns from 'components/ShareBtns'

function ArtDetail ({dispatch, match, detailer, ...args}) {
    const [isMarkdown, setMarkType] = useState(2)
    const { params } = match

    const { data: { info = [] }, isLoading } = useFetch(`${mainDetailBy}`, {id: params.id})
    const _info = info.length && info[0]
    useTitle(`${_info.title || ''} ${_info.sub_title || ''}`, false)
    useEffect(() => {
        setMarkType(_info.type)
    }, [])

    return (<Fragment>
        <div className={styles.list_detail}>
            {
                isLoading ?
                    (<PageLoading />) :
                    (<>
                        <div className={styles.header}>
                            <h3 className={styles.header_title}>{_info.title}</h3>
                        </div>
                        {
                            isMarkdown === 2  ?
                                <ReactMarkdown source={_info.content} /> : 
                                (<article
                                    className={styles.article}
                                    dangerouslySetInnerHTML={{__html: _info.content}}>
                                </article>)
                        }
                     </>
                    )
            }
            <ShareBtns></ShareBtns>
        </div>
    </Fragment>)
}

export default ArtDetail