import React from 'react';
import {
    StyleSheet,
    View, 
    Text,
    Image,
    TouchableOpacity
} from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, icons, images, SIZES } from '../constants';

const StarReview = (props: any) => {
    const {rate} = props;

    var starComponents = [];
    var fullStar = Math.floor(rate);
    var noStar = Math.floor(5-rate);
    var halfStar = 5 - fullStar - noStar;

    // Full star
    for(var i = 0; i < fullStar; i++){
        starComponents.push(
            <Image 
                key={`full-${i}`}
                source={icons.starFull}
                resizeMode="cover"
                style={{
                    width: 20,
                    height: 20
                }}
            />
        )
    }

    // Half star
    for(var i = 0; i < halfStar; i++){
        starComponents.push(
            <Image
                key={`half-${i}`}
                source={icons.starHalf}
                resizeMode="cover"
                style={{
                    width: 20,
                    height: 20
                }}
            />
        )
    }

    // No star
    for(var i = 0; i < noStar; i++){
        starComponents.push(
            <Image
                key={`empty-${i}`}
                source={icons.starEmpty}
                resizeMode="cover"
                style={{
                    width: 20,
                    height: 20
                }}
            />
        )
    }

    return (
        <View style={{flexDirection: "row", alignItems: 'center'}}>
            {starComponents}
            <Text style={{marginLeft: SIZES.base, color: COLORS.gray}}>{rate}</Text>
        </View>
    )
};

const IconLabel = (props: any) => {
    const {icon, label} = props;
    return(
        <View style={{alignItems: "center"}}>
            <Image
                source={icon}
                resizeMode="cover"
                style={{
                    width: 50,
                    height: 50
                }}
            />
            <Text style={{marginTop: SIZES.padding, color: COLORS.gray}}>{label}</Text>
        </View>
    )
};

interface IProps {
    navigation?: any;
}

const DestinationDetail: React.FC<IProps> = ({navigation}) => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={{flex: 2, }}>
                <Image
                    source={images.skiVillaBanner}
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        height: "80%"
                    }}
                />
                <View
                    style={[{
                        position: "absolute",
                        right: "5%",
                        bottom: "5%",
                        left: "5%",
                        borderRadius: 15,
                        padding: SIZES.padding,
                        backgroundColor: COLORS.white
                    }, styles.shadow]}
                >
                    <View style={{flexDirection: "row"}}>
                        <View style={styles.shadow}>
                            <Image
                                source={images.skiVilla}
                                resizeMode="cover"
                                style={{
                                    width: 70,
                                    height: 70,
                                    borderRadius: 15
                                }}
                            />
                        </View>
                        <View style={{marginHorizontal: SIZES.radius, justifyContent: "space-around"}}>
                            <Text style={{fontSize: 15, fontWeight: "bold"}}>Ski Villa</Text>
                            <Text style={{color: COLORS.gray}}>Franch</Text>

                            <StarReview
                                rate={3.5}
                            />
                        </View>
                    </View>
                    
                    <View style={{marginTop: SIZES.radius}}>
                        <Text style={{color: COLORS.gray}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Text>
                    </View>
                </View>

                <View
                    style={{
                        position: 'absolute',
                        top: 50,
                        right: 20,
                        left: 20,
                        flexDirection: "row"
                    }}
                >
                    <View style={{flex: 1}}>
                        <TouchableOpacity
                            onPress={() => {navigation.navigate("Home")}}
                        >
                            <Image 
                                source={icons.back}
                                resizeMode="cover"
                                style={{
                                    width: 30, 
                                    height: 30
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, alignItems: "flex-end"}}>
                        <TouchableOpacity
                            onPress={() => console.log("Menu on pressed")}
                        >
                            <Image 
                                source={icons.menu}
                                resizeMode="cover"
                                style={{
                                    width: 30, 
                                    height: 30
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Body */}
            <View style={{flex: 1.5, }}>
                {/* Icons */}
                <View style={{flexDirection: "row", marginTop: SIZES.base, paddingHorizontal: SIZES.padding * 2, justifyContent: "space-between"}}>
                    <IconLabel
                        icon={icons.villa}
                        label="Villa"
                    />
                    <IconLabel
                        icon={icons.parking}
                        label="Parking"
                    />
                    <IconLabel
                        icon={icons.wind}
                        label="4 ºC"
                    />
                </View>

                {/* About */}
                <View style={{marginTop: SIZES.padding, paddingHorizontal: SIZES.padding}}>
                    <Text style={{fontSize: 18, fontWeight: "bold"}}>About</Text>
                    <Text style={{marginBottom: SIZES.radius, color: COLORS.gray, fontSize: 14}}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    </Text>
                </View>
            </View>

            {/* Footer */}
            <View style={{flex: 0.5, paddingHorizontal: SIZES.padding }}>
                <LinearGradient
                    style={{width: "100%", height: 70, borderRadius: 15}}
                    colors={["#edf0fc","#d6dfff"]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                >    
                    <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
                        <View style={{flex: 1, marginHorizontal: SIZES.padding, justifyContent: "center"}}>
                            <Text style={{fontSize: 24, fontWeight: "bold"}}>$1000</Text>
                        </View>
                        <TouchableOpacity
                            style={{width: 130, height: "80%", marginHorizontal: SIZES.radius}}
                            onPress={() => console.log("Booking on pressed")}
                        >
                            <LinearGradient
                                style={{flex: 1, alignItems: "center", justifyContent: "center", borderRadius: 10}}
                                colors= {["#46eaff","#5884ff"]}
                                start={{x: 0, y: 0}}
                                end={{x: 1, y: 0}}
                            >
                                <Text style={{color: COLORS.white, fontSize: 20, fontWeight: "bold"}}>Booking</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.35,
        shadowRadius: 3.84,
        elevation: 5
    }
})

export default DestinationDetail
