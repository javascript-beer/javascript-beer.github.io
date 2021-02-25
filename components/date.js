import { parseISO, format } from 'date-fns'
import { es } from 'date-fns/locale'

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  const capitalize = function(str) {
    var reg = /\b([a-zÁ-ú]{3,})/g;
    return str.replace(reg, (w) => w.charAt(0).toUpperCase() + w.slice(1));
  }
  // format localize in spanish will return the month lowercase
  // this is intended behavior: https://github.com/date-fns/date-fns/issues/674
  const parsed = capitalize(format(date, 'd LLLL yyyy - HH:mm', { locale: es }));
  return <time dateTime={dateString}>{parsed} horas</time>
}
