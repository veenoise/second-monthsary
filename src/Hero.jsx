import { ConfettiButton } from "@/components/magicui/confetti";
import Ripple from "@/components/magicui/ripple"
import PulsatingButton from "@/components/magicui/pulsating-button"

export default function Hero() {
	return (
		<>
	
			<div className="relative z-20 h-screen flex justify-center items-center">
				<ConfettiButton
					options={{
						get angle() {
							return Math.random() * 360;
						},
					}}
				>
					<PulsatingButton
						className="text-wrap h-fit w-52 absolute z-20 py-5 text-lg text-gray-800 bg-red-300"
						pulseColor="#FFC0CB"
					>
						Happy Second Monthsary, Babyyyy!!!!! 🎉
					</PulsatingButton>
					
				</ConfettiButton>
			</div>	
				
			
			<Ripple 
				numCircles="4"
			/>
			
		</>
	)
}