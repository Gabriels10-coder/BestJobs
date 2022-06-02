import React, { useState } from 'react';
import { Message } from '../../../utils/messages';
import Estrutura from '../../../components/layouts/estrutura';
import { Grid } from '@mui/material';
import CardCategory from '../../../components/cardspagecategory';
import { Breadcrumbs } from '@mui/material'
import { Tecnologias } from '../../../datafake/tec';
import { Pagination } from 'antd';
import * as Styled from '../styles';


const PageCategoryTecnologias: React.FC = () => {
    const [Loading, SetLoading] = useState(false);
    const HandleLoading = () => {
        SetLoading(true);
        setTimeout(() => {
            SetLoading(false);
            Message('error', 'OPS!! Falhou volte novamente mais tarde', {
                fontWeight: 'bold',
            })
        }, 2000);
    };

    return (
        <Estrutura active={Loading}>
            <Grid
                marginLeft={5}
                marginTop={10}
                flexDirection='column'
                container>
                <Grid item>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Styled.LinkCustom to='/'>BestJobs</Styled.LinkCustom>
                        <Styled.LinkCustom to='/'>Categorias</Styled.LinkCustom>
                        <Styled.LinkCustom to='/'>Tecnologias</Styled.LinkCustom>
                    </Breadcrumbs>
                </Grid>
                <Grid
                    item
                >
                    <Styled.Title>Tecnologias</Styled.Title>
                </Grid>
                <Grid
                    gap={3}
                    alignItems='center'
                    container
                >
                    {Tecnologias.map((element) => (
                        <Grid
                            flexDirection='row'
                            item key={element.name}>
                            <CardCategory
                                name={element.name}
                                description={element.description}
                                img={element.img}
                                price={element.price}
                                star={element.star}
                            />
                        </Grid>
                    ))}


                </Grid>
                <Grid
                    item
                    display='flex'
                    justifyContent='center'
                    marginTop={5}
                >
                    <Pagination defaultCurrent={1} total={50} />
                </Grid>
            </Grid>

        </Estrutura>
    )
}

export default PageCategoryTecnologias;
