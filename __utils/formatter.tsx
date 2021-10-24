import dayjs from 'dayjs'

export type TimeType = Date | string | number
export const localDateTimeString = (time: TimeType): string => {
  return dayjs(time).format('YYYY-MM-DD HH:mm:ss')
}