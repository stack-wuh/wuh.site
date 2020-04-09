import React, { Fragment } from 'react'
import styles from 'styles/list-detail.module.scss'
import { useFetch, useTitle } from 'hooks'
import { mainDetailBy } from 'api/map'
import PageLoading from 'components/PageLoading'
import ShareBtns from 'components/ShareBtns'
import Markdown from 'components/Markdown'

function ArtDetail ({ match }) {
    const { params } = match

    const { data: { info = [] }, isLoading } = useFetch(`${mainDetailBy}`, {id: params.id})
    const _info = info.length && info[0]
    useTitle(`${_info.title || ''} ${_info.sub_title || ''}`, false)

    const shareBtnProps = {
        qqzone: {
            url: 'https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?' + 
            'url=https://wuh.site/blog/'+ _info.id +'&title=山河入梦来 | WUH.SITE | 你一定也想起舞吧&' + 
            'sharesource=qzone&' +
            'pics=' + _info.cover_img + '&' +
            'summary=' + _info.sub_title + '&' + 
            'site=https://wuh.site'
        }
    }

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
                        <ShareBtns payload={shareBtnProps} />
                     </>
                    )
            }
        </div>
    </Fragment>)
}

export default ArtDetail