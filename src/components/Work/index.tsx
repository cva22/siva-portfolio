// import { Card, CardBody, CardHeader, Heading, SimpleGrid, Text } from '@chakra-ui/react';
// import { Caption } from '../ui/typography';
// // import { useRouter } from 'next/router';
// import Link from 'next/link';

// import { useEffect } from 'react';

// export default function Work() {
//     // const router = useRouter();

//     // useEffect(() => {
//     //     if (typeof window !== 'undefined') {
//     //         // Your client-side code using router
//     //         console.log('Test');

//     //     }
//     // }, []);

//     // const handleCardClick = (link: string) => {
//     //     router.push(link);
//     // };

//     return (
//         <section
//             id="work"
//             className='relative z-10 w-full bg-neutrals-900 py-32 flex flex-col items-center justify-center min-h-screen'
//         >
//             <div className="w-full py-28 max-lg:mx-auto max-lg:w-11/12 max-lg:max-w-7xl lg:pl-10 xl:pl-20">
//                 <Caption className='border-primary/30 bg-primary/10 text-primary after:bg-primary/10' id='adout-caption'>Work</Caption>

//                 <SimpleGrid columns={[2, null, 3]} spacing={3}>
//                     {[1, 2, 3, 4, 5, 6, 7].map((index) => (
//                         // <Link href={`/your-link/${index}`} key={index}>
//                         <a>
//                             <Card
//                                 // onClick={() => handleCardClick(`/your-link/${index}`)}
//                                 className="transition-transform transform hover:scale-105"
//                             >
//                                 <CardHeader>
//                                     <Heading size='md'> Customer dashboard</Heading>
//                                 </CardHeader>
//                                 <CardBody>
//                                     <Text>View a summary of all your customers over the last month.</Text>
//                                 </CardBody>
//                             </Card>
//                         </a>
//                         // </Link>
//                     ))}
//                 </SimpleGrid>
//             </div>
//         </section>
//     );
// };



// pages/index.js

import { useState, useRef, useEffect } from "react";
import { HStack, Flex, Box, Text, Button, Container } from "@chakra-ui/react";

const data = [
    { id: 1, title: "Card 1", description: "Description for Card 1Description for Card 1Description for Card 1Description for Card 1Description for Card 1Description for Card 1Description for Card 1Description for Card 1Description for Card 1Description for Card 1Description for Card 1Description for Card 1Description for Card 1Description for Card 1v" },
    { id: 2, title: "Card 2", description: "Description for Card 2" },
    { id: 3, title: "Card 3", description: "Description for Card 3" },
    { id: 4, title: "Card 1", description: "Description for Card 1" },
    { id: 5, title: "Card 2", description: "Description for Card 2" },
    { id: 6, title: "Card 3", description: "Description for Card 3" },
    { id: 7, title: "Card 1", description: "Description for Card 1" },
    { id: 8, title: "Card 2", description: "Description for Card 2" },
    { id: 9, title: "Card 3", description: "Description for Card 3" },
    { id: 10, title: "Card 1", description: "Description for Card 1" },
    { id: 11, title: "Card 2", description: "Description for Card 2" },
    { id: 12, title: "Card 3", description: "Description for Card 3" },
    { id: 13, title: "Card 1", description: "Description for Card 1" },
    { id: 14, title: "Card 2", description: "Description for Card 2" },
    { id: 15, title: "Card 3", description: "Description for Card 3" },
    // Add more data as needed
];

export default function Work() {
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);
    const [selectedCard, setSelectedCard] = useState(null);
    const scrollRef = useRef();

    useEffect(() => {
        const container = scrollRef.current;
        setShowLeftButton(container.scrollLeft > 0);
        setShowRightButton(
            container.scrollLeft < container.scrollWidth - container.offsetWidth
        );
    }, []);

    const handleScroll = () => {
        const container = scrollRef.current;
        setShowLeftButton(container.scrollLeft > 0);
        setShowRightButton(
            container.scrollLeft < container.scrollWidth - container.offsetWidth
        );
    };

    const scrollLeft = () => {
        const container = scrollRef.current;
        container.scrollTo({
            left: container.scrollLeft - container.offsetWidth,
            behavior: "smooth",
        });
        handleScroll();
    };

    const scrollRight = () => {
        const container = scrollRef.current;
        container.scrollTo({
            left: container.scrollLeft + container.offsetWidth,
            behavior: "smooth",
        });
        handleScroll();
    };

    const handleClick = (cardId) => {
        setSelectedCard(cardId === selectedCard ? null : cardId);
    };

    const handleOutsideClick = (event) => {
        if (event.target.closest(".card-container")) return;
        setSelectedCard(null);
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <Box position="relative" width="100%" height="100vh" overflow="hidden">
            <Button
                position="absolute"
                left="2"
                top="50%"
                transform="translateY(-50%)"
                onClick={scrollLeft}
                disabled={!showLeftButton}
            >
                Left
            </Button>
            <HStack
                ref={scrollRef}
                spacing="4"
                overflowX="auto"
                width="100%"
                height="100%"
                onScroll={handleScroll}
            >
                {data.map((item) => (
                    <Box
                        key={item.id}
                        className="card-container"
                        width="300px"
                        height="200px"
                        borderRadius="md"
                        boxShadow="md"
                        backgroundColor="white"
                        onClick={() => handleClick(item.id)}
                        cursor="pointer"
                        transform={
                            selectedCard === item.id ? "scale(1.1)" : "scale(1)"
                        }
                        transition="transform 0.3s ease"
                    >
                        <Box p="4">
                            <Text fontSize="lg" fontWeight="bold">
                                {item.title}
                            </Text>
                            <Text mt="2">{item.description}</Text>
                        </Box>
                    </Box>
                ))}
            </HStack>
            <Button
                position="absolute"
                right="2"
                top="50%"
                transform="translateY(-50%)"
                onClick={scrollRight}
                disabled={!showRightButton}
            >
                Right
            </Button>
        </Box>
    );
};