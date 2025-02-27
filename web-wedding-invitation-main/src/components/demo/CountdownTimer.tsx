import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"

interface CountdownTimerProps {
    targetDate: Date
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    function calculateTimeLeft() {
        const difference = +targetDate - +new Date()
        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            }
        }

        return timeLeft
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(timer)
    }, [targetDate])

    const timerComponents = Object.entries(timeLeft).map(([interval, value]) => (
        <Card key={interval} className="bg-primary text-primary-foreground">
            <CardContent className="flex flex-col items-center justify-center p-6">
                <motion.span
                    key={value}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-2"
                >
                    {value}
                </motion.span>
                <span className="text-sm uppercase">{interval}</span>
            </CardContent>
        </Card>
    ))

    return (
        <section className="py-12 bg-background">
            <h2 className="text-3xl font-bold text-center mb-6">Save The Date</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {timerComponents}
            </div>
        </section>
    )
}