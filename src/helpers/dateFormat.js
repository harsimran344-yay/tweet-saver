export const formatDate = (date) => {
    const dateEvent = new Date(date);
    let newDate = new Date(dateEvent.toJSON()).toUTCString()
    let formatedDate = newDate.split(" ").slice(0, 4).join(' ')
    return formatedDate
}

export default formatDate;