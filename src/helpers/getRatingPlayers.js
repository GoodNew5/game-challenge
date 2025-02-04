import { data } from "../data"

export function getRatingPlayers() {
  const { friends, rating } = data
  const clonedRating = [...rating]
  const sortedRating = clonedRating.sort((a, b) =>  Number(b.points) - Number(a.points))
  let place = 1

  return sortedRating
  .map((player, index) => {
    if (index > 0 && player.points !== sortedRating[index - 1].points) {
      place = index + 1
    }

    return { place, ...player, isFriend: !!friends.find((friend) => player.id === friend.id) }
  })
}
