const allReviews = [
    { name: 'Henry', rating: 5, text: 'Great movie!!'},
    { name: 'Eva', rating: 2, text: 'Not as good as the book'},
    { name: 'Denzel', rating: 4, text: 'best movie I have seen in a while!'},
    { name: 'Selma', rating: 1, text: 'Not worth the hype..'},
]

const recentNegativeComment = document.getElementById("recent-negative-review")
const recentNegativeReview = allReviews.findLast(review => review.rating <= 2)

if(recentNegativeReview){
    recentNegativeComment.textContent = `Name: ${recentNegativeReview.name}, Rating: ${recentNegativeReview.rating} star, Comment: ${recentNegativeReview.text}`
} else{
    recentNegativeComment.textContent = "The movie is great!"
}