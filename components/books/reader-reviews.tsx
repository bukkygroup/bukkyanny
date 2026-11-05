// Fictional design samples only. Replace with approved reviews before publication.
const sampleReviews = [
  {
    name: "Lerato M.",
    location: "Johannesburg, South Africa",
    quote: "Warm, thoughtful writing that invites you to slow down and reflect. The voice feels personal and easy to connect with.",
  },
  {
    name: "Tomi A.",
    location: "Lagos, Nigeria",
    quote: "There is something comforting about a story that makes room for both ambition and vulnerability. I found myself returning to a few passages long after reading them.",
  },
  {
    name: "Emma R.",
    location: "London, United Kingdom",
    quote: "Honest, approachable and full of heart. A lovely choice for a quiet evening with a book.",
  },
  {
    name: "Sipho D.",
    location: "Durban, South Africa",
    quote: "The conversational style drew me in straight away. It is the kind of writing that gives you something to think about without telling you how to feel.",
  },
  {
    name: "Adaeze O.",
    location: "Abuja, Nigeria",
    quote: "I appreciated the gentle humour alongside the more reflective moments. It would make an interesting conversation starter for a book club.",
  },
  {
    name: "Sophie L.",
    location: "Paris, France",
    quote: "A thoughtful reading experience, with a voice that feels sincere and welcoming.",
  },
  {
    name: "Naledi K.",
    location: "Cape Town, South Africa",
    quote: "The small observations stayed with me. I enjoyed the balance of warmth, reflection and everyday life, and the space it left for my own thoughts.",
  },
  {
    name: "Chidi E.",
    location: "Enugu, Nigeria",
    quote: "Clear, engaging writing with a personal touch. The reflective moments were my favourite part.",
  },
  {
    name: "Lukas W.",
    location: "Berlin, Germany",
    quote: "An inviting voice and plenty to reflect on. I enjoyed taking my time with it rather than rushing through to the end.",
  },
] as const;

export function ReaderReviews() {
  return (
    <section className="section-pad" aria-labelledby="reader-reviews-title" aria-describedby="reader-reviews-note">
      <div className="page-container flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h2 id="reader-reviews-title" className="section-title">Reader reviews</h2>
          <p id="reader-reviews-note" className="max-w-2xl text-base leading-relaxed text-gray-600">
            Fictional sample reviews for design preview. Names, locations, and quotes are illustrative and do not represent real reader endorsements.
          </p>
        </div>
        <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
          {sampleReviews.map((review) => (
            <figure key={review.name} className="flex break-inside-avoid flex-col gap-8 rounded-sm border border-gray-300 bg-gray-50 p-6">
              <blockquote className="text-lg leading-relaxed">
                <p>“{review.quote}”</p>
              </blockquote>
              <figcaption className="flex flex-col gap-1">
                <span className="text-base font-semibold">{review.name}</span>
                <span className="text-sm text-gray-600">{review.location}</span>
                <span className="text-xs text-gray-500">Fictional sample review</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
