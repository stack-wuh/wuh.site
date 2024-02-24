import {TagProps} from './tag'
import { SpaceProps } from './space'

export namespace Wuh {
  export const WButton: React.FC
}

export const WButton: React.FC
export const WAlert: React.FC
export const WHeader: React.FC
export const WFooter: React.FC
export const WCard: React.FC<any, any>
export const WCarousel: React.FC<any, any>
export const WTag: React.FC<TagProps>
export const Space: React.FC<SpaceProps>

declare module '*.module.scss'