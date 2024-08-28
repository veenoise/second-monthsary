import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "William",
    username: "@honeybunch1",
    body: "Sobrang ganda ng girlfriend ko!!!",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "William",
    username: "@honeybunch2",
    body: "Napakaswerte ko sa kanya talaga!",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "William",
    username: "@honeybunch3",
    body: "Kumain ka na ba, baby? Ubusin mo food mo ah. Eatwellllll",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "William",
    username: "@honeybunch4",
    body: "Wait lang, baby!!! Nagre-react pa ako sa tiktok videos mo.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "William",
    username: "@honeybunch5",
    body: "Did I already mention na sobrang ganda ng girlfriend ko? Oh, I already said that? Well... sobrang ganda ng girlfriend ko!!!",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "William",
    username: "@honeybunch6",
    body: "Cute niya ngumiti, tas mabango, tas masarap i-hug.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Testimonials() {
  return (
		<div>
			<h1 className="text-center text-3xl font-bold">Why is she the best?</h1>
			<div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
				<Marquee pauseOnHover className="[--duration:20s]">
					{firstRow.map((review) => (
						<ReviewCard key={review.username} {...review} />
					))}
				</Marquee>
				<Marquee reverse pauseOnHover className="[--duration:20s]">
					{secondRow.map((review) => (
						<ReviewCard key={review.username} {...review} />
					))}
				</Marquee>
				<div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
				<div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
			</div>
		</div>
  );
}
