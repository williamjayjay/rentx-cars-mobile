import { eachDayOfInterval, format, parseISO } from 'date-fns';

import { MarkedDatesProps, DayProps } from '.'
import { getPlataformDate } from '../../utils/getPlataformDate';
import theme from '../../styles/theme';

export function generateInterval(start: DayProps, end: DayProps) {
  let interval: MarkedDatesProps = {}

  const teste = eachDayOfInterval({ start: parseISO(start.dateString), end: parseISO(end.dateString) })
    .forEach((item) => {
      const date = format(getPlataformDate(item), 'yyyy-MM-dd');

      interval = {
        ...interval,
        [date]: {
          color: start.dateString === date || end.dateString === date
            ? theme.colors.main
            : theme.colors.main_light,

          textColor: start.dateString === date || end.dateString === date
            ? theme.colors.main_light
            : theme.colors.main
        }
      }

    })

  return interval
}