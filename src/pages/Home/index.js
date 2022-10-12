import { StyleSheet, Text, View, FlatList } from 'react-native';
import Actions from '../../components/Actions';
import Balance from '../../components/Balance/index';
import Header from '../../components/Header/index';
import Movements from '../../components/Movements/index';

const list = [
    {
        id: 1,
        label: 'Boleto Luz',
        value: '395,99',
        date: '17/09/2022',
        type: 0 //despesas
    },
    {
        id: 2,
        label: 'Salário',
        value: '1.500,00',
        date: '01/10/2022',
        type: 1 //receita
    },
    {
        id: 3,
        label: 'Venda PC',
        value: '2.399,99',
        date: '05/10/2022',
        type: 1 //receita
    },
]

export default function Home() {
    return (
        <View style={styles.container}>
            <Header name="Felipe Kreulich"/>
            <Balance saldo="15.000,00" gastos="-385,90" />
            <Actions />
            <Text style={styles.title}>Últimas Movimentações</Text>
            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={ (item) => String(item.id) }
                showsVerticalScrollIndicator={false}
                renderItem={ ({ item }) => <Movements data={item} /> }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DADADA',
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        margin: 14,
        color: '#4f4f4f'
    },
    list:{
        marginStart: 14,
        marginEnd: 14,
    }
});
