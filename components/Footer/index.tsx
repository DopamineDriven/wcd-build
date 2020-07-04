import React, { FC } from "react";
import { Center, ContainerFooter } from "../Style";

export const Footer: FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <ContainerFooter>
            <Center>
                <a href="https://github.com/DopamineDriven/wcd&dash;build" target="__blank">{`© ${currentYear}`}</a>
            </Center>
        </ContainerFooter>
    );
};