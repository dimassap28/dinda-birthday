import Flower from './flower';
import main from './main.module.scss';

function FlowerServer() {
    return (
        <Flower>
            <div className='not-loaded'
                style={{
                    justifyContent: 'center',
                    minHeight: '100vh',
                    backgroundColor: '#000',
                    overflow: 'hidden',
                    perspective: '1000px',
                    display: 'flex',
                    alignItems: 'flex-end',
                }}

            >
                {/* <div className={`${main.night}`}></div> */}
                <div className={`${main.flowers}`}>
                    <div className={`${main.flower} ${main.flower1}`}>
                        <div className={`${main.flower__leafs} ${main.flower__leafs1}`}>
                            <div className={`${main.flower__leaf} ${main.flower__leaf1}`}></div>
                            <div className={`${main.flower__leaf} ${main.flower__leaf2}`}></div>
                            <div className={`${main.flower__leaf} ${main.flower__leaf3}`}></div >
                            <div className={`${main.flower__leaf} ${main.flower__leaf4} `}></div >
                            <div className={`${main.flower__whiteCircle}`}></div>

                            <div className={`${main.flower__light} ${main.flower__light1} `}></div >
                            <div className={`${main.flower__light} ${main.flower__light2} `}></div >
                            <div className={`${main.flower__light} ${main.flower__light3} `}></div>
                            <div className={`${main.flower__light} ${main.flower__light4} `}></div>
                            <div className={`${main.flower__light} ${main.flower__light5} `}></div >
                            <div className={`${main.flower__light} ${main.flower__light6} `}></div>
                            <div className={`${main.flower__light} ${main.flower__light7} `}></div>
                            <div className={`${main.flower__light} ${main.flower__light8} `}></div>

                        </div>
                        <div className={`${main.flower__line} `}>
                            <div className={`${main.flower__line__leaf} ${main.flower__line__leaf1} `}></div>
                            <div className={`${main.flower__line__leaf} ${main.flower__line__leaf2} `}></div>
                            <div className={`${main.flower__line__leaf} ${main.flower__line__leaf3} `}></div>
                            <div className={`${main.flower__line__leaf} ${main.flower__line__leaf4} `}></div>
                            <div className={`${main.flower__line__leaf} ${main.flower__line__leaf5} `}></div>
                            <div className={`${main.flower__line__leaf} ${main.flower__line__leaf6} `}></div>
                        </div>
                    </div>

                    <div className={`${main.flower} ${main.flower2}`}>
                        <div className={`${main.flower__leafs} ${main.flower__leafs2} `}>
                            <div className={`${main.flower__leaf} ${main.flower__leaf1} `}></div>
                            <div className={`${main.flower__leaf} ${main.flower__leaf2} `}></div>
                            <div className={`${main.flower__leaf} ${main.flower__leaf3} `}></div >
                            <div className={`${main.flower__leaf} ${main.flower__leaf4} `}></div>
                            <div className={`${main.flower__whiteCircle} `}></div>

                            <div className={`${main.flower__light} ${main.flower__light1} `}></div>
                            <div className={`${main.flower__light}${main.flower__light2} `}></div>
                            <div className={`${main.flower__light}${main.flower__light3} `}></div>
                            <div className={`${main.flower__light}${main.flower__light4} `}></div>
                            <div className={`${main.flower__light}${main.flower__light5} `}></div>
                            <div className={`${main.flower__light}${main.flower__light6} `}></div>
                            <div className={`${main.flower__light}${main.flower__light7} `}></div>
                            <div className={`${main.flower__light}${main.flower__light8} `}></div>

                        </div>
                        <div className={`${main.flower__line} `}>
                            <div className={`${main.flower__line__leaf}${main.flower__line__leaf1} `}></div>
                            <div className={`${main.flower__line__leaf}${main.flower__line__leaf2} `}></div>
                            <div className={`${main.flower__line__leaf}${main.flower__line__leaf3} `}></div>
                            <div className={`${main.flower__line__leaf}${main.flower__line__leaf4} `}></div>
                        </div>
                    </div>

                    <div className={`${main.flower} ${main.flower3} `}>
                        <div className={`${main.flower__leafs} ${main.flower__leafs3} `}>
                            <div className={`${main.flower__leaf} ${main.flower__leaf1} `}></div>
                            <div className={`${main.flower__leaf} ${main.flower__leaf2} `}></div>
                            <div className={`${main.flower__leaf} ${main.flower__leaf3} `}></div >
                            <div className={`${main.flower__leaf} ${main.flower__leaf4} `}></div>
                            <div className={`${main.flower__whiteCircle} `}></div>

                            <div className={`${main.flower__light} ${main.flower__light1} `}></div>
                            <div className={`${main.flower__light} ${main.flower__light2} `}></div>
                            <div className={`${main.flower__light} ${main.flower__light3} `}></div>
                            <div className={`${main.flower__light} ${main.flower__light4} `}></div>
                            <div className={`${main.flower__light} ${main.flower__light5} `}></div>
                            <div className={`${main.flower__light} ${main.flower__light6} `}></div>
                            <div className={`${main.flower__light} ${main.flower__light7} `}></div>
                            <div className={`${main.flower__light} ${main.flower__light8} `}></div>

                        </div>
                        <div className={`${main.flower__line} `}>
                            <div className={`${main.flower__line__leaf} ${main.flower__line__leaf1} `}></div>
                            <div className={`${main.flower__line__leaf} ${main.flower__line__leaf2} `}></div>
                            <div className={`${main.flower__line__leaf} ${main.flower__line__leaf3} `}></div>
                            <div className={`${main.flower__line__leaf} ${main.flower__line__leaf4} `}></div>
                        </div>
                    </div>

                    <div className={`${main.growAns} `} style={{ '--d': '1.2s' }}>
                        <div className={`${main.flower__gLong} `}>
                            <div className={`${main.flower__gLong__top} `}></div>
                            <div className={`${main.flower__gLong__bottom} `}></div>
                        </div>
                    </div>

                    <div className={`${main.growingGrass} `}>
                        <div className={`${main.flower__grass} ${main.flower__grass1} `}>
                            <div className={`${main.flower__grassTop} `}></div>
                            <div className={`${main.flower__grassBottom} `}></div>
                            <div className={`${main.flower__grass__leafgrowAns} ${main.flower__grass__leaf1} `}></div>
                            <div className={`${main.flower__grass__leaf} ${main.flower__grass__leaf2} `}></div>
                            <div className={`${main.flower__grass__leaf} ${main.flower__grass__leaf3} `}></div>
                            <div className={`${main.flower__grass__leaf} ${main.flower__grass__leaf4} `}></div>
                            <div className={`${main.flower__grass__leaf} ${main.flower__grass__leaf5} `}></div>
                            <div className={`${main.flower__grass__leaf} ${main.flower__grass__leaf6} `}></div >
                            <div className={`${main.flower__grass__leaf} ${main.flower__grass__leaf7} `}></div>
                            <div className={`${main.flower__grass__leaf} ${main.flower__grass__leaf8} `}></div>
                            <div className={`${main.flower__grass__overlay} `}></div>
                        </div>
                    </div>

                    <div className={`${main.growingGrass} `}>
                        <div className={`${main.flower__grass} ${main.flower__grass2} `}>
                            <div className={`${main.flower__grassTop} `}></div>
                            <div className={`${main.flower__grassBottom} `}></div>
                            <div className={`${main.flower__grass__leaf} ${main.flower__grass__leaf1} `}></div>
                            <div className={`${main.flower__grass__leaf} ${main.flower__grass__leaf2} `}></div>
                            <div className={`${main.flower__grass__leaf} ${main.flower__grass__leaf3} `}></div>
                            <div className={`${main.flower__grass__leaf} ${main.flower__grass__leaf4} `}></div>
                            <div className={`${main.flower__grass__leaf} ${main.flower__grass__leaf5} `}></div>
                            <div className={`${main.flower__grass__leaf} ${main.flower__grass__leaf6} `}></div>
                            <div className={`${main.flower__grass__leaf} ${main.flower__grass__leaf7} `}></div>
                            <div className={`${main.flower__grass__leaf} ${main.flower__grass__leaf8} `}></div>
                            <div className={`${main.flower__grass__overlay} `}></div>
                        </div>
                    </div>

                    <div className={`${main.growAns} `} style={{ '--d': '2.4s' }}>
                        <div className={`${main.flower__g_right} ${main.flower__g_right1} `}>
                            <div className={`${main.leaf} `}></div>
                        </div>
                    </div>

                    <div className={`${main.growAns} `} style={{ '--d': '2.8s' }}>
                        <div className={`${main.flower__g_right} ${main.flower__g_right2} `}>
                            <div className={`${main.leaf} `}></div>
                        </div>
                    </div >

                    <div className={`${main.growAns} `} style={{ '--d': '2.8s' }}>
                        <div className={`${main.flower__g_front} `}>
                            <div className={`${main.flower__g_front__leaf_wrapper} ${main.flower__g_front__leaf_wrapper1} `}>
                                <div className={`${main.flower__g_front__leaf} `}></div>
                            </div>
                            <div className={`${main.flower__g_front__leaf_wrapper} ${main.flower__g_front__leaf_wrapper2} `}>
                                <div className={`${main.flower__g_front__leaf} `}></div>
                            </div>
                            <div className={`${main.flower__g_front__leaf_wrapper} ${main.flower__g_front__leaf_wrapper3} `}>
                                <div className={`${main.flower__g_front__leaf} `}></div>
                            </div>
                            <div className={`${main.flower__g_front__leaf_wrapper} ${main.flower__g_front__leaf_wrapper4} `}>
                                <div className={`${main.flower__g_front__leaf} `}></div>
                            </div>
                            <div className={`${main.flower__g_front__leaf_wrapper} ${main.flower__g_front__leaf_wrapper5} `}>
                                <div className={`${main.flower__g_front__leaf} `}></div>
                            </div >
                            <div className={`${main.flower__g_front__leaf_wrapper} ${main.flower__g_front__leaf_wrapper6} `}>
                                <div className={`${main.flower__g_front__leaf} `}></div>
                            </div>
                            <div className={`${main.flower__g_front__leaf_wrapper} ${main.flower__g_front__leaf_wrapper7} `}>
                                <div className={`${main.flower__g_front__leaf} `}></div>
                            </div >
                            <div className={`${main.flower__g_front__leaf_wrapper} ${main.flower__g_front__leaf_wrapper8} `}>
                                <div className={`${main.flower__g_front__leaf} `}></div>
                            </div>
                            <div className={`${main.flower__g_front__line} `}></div>
                        </div>
                    </div>

                    <div className={`${main.growAns} `} style={{ '--d': '3.2s' }}>
                        <div className={`${main.flower__g_fr} `}>
                            <div className={`${main.leaf} `}></div>
                            <div className={`${main.flower__g_fr__leaf} ${main.flower__g_fr__leaf1} `}></div>
                            <div className={`${main.flower__g_fr__leaf} ${main.flower__g_fr__leaf2} `}></div>
                            <div className={`${main.flower__g_fr__leaf} ${main.flower__g_fr__leaf3} `}></div>
                            <div className={`${main.flower__g_fr__leaf} ${main.flower__g_fr__leaf4} `}></div >
                            <div className={`${main.flower__g_fr__leaf} ${main.flower__g_fr__leaf5} `}></div >
                            <div className={`${main.flower__g_fr__leaf} ${main.flower__g_fr__leaf6} `}></div>
                            <div className={`${main.flower__g_fr__leaf} ${main.flower__g_fr__leaf7} `}></div>
                            <div className={`${main.flower__g_fr__leaf} ${main.flower__g_fr__leaf8} `}></div>
                        </div>
                    </div>

                    <div className={`${main.long_g} ${main.long_g0} `}>
                        <div className={`${main.growAns} `} style={{ '--d': '3s' }}>
                            <div className={`${main.leaf} ${main.leaf0} `}></div>
                        </div>
                        <div className={`${main.growAns} `} style={{ '--d': '2.2s' }}>
                            <div className={`${main.leaf} ${main.leaf1} `}></div >
                        </div >
                        <div className={`${main.growAns} `} style={{ '--d': '3.4s' }}>
                            <div className={`${main.leaf} ${main.leaf2} `}></div>
                        </div>
                        <div className={`${main.growAns} `} style={{ '--d': '3.6s' }}>
                            <div className={`${main.leaf} ${main.leaf3} `}></div>
                        </div>
                    </div>

                    <div className={`${main.long_g} ${main.long_g1} `}>
                        <div className={`${main.growAns} `} style={{ '--d': '3.6s' }}>
                            <div className={`${main.leaf} ${main.leaf0} `}></div>
                        </div>
                        <div className={`${main.growAns} `} style={{ '--d': '3.8s' }}>
                            <div className={`${main.leaf} ${main.leaf1} `}></div>
                        </div>
                        <div className={`${main.growAns} `} style={{ '--d': '4s' }}>
                            <div className={`${main.leaf} ${main.leaf2} `}></div>
                        </div>
                        <div className={`${main.growAns} `} style={{ '--d': '4.2s' }}>
                            <div className={`${main.leaf} ${main.leaf3} `}></div>
                        </div>
                    </div>

                    <div className={`${main.long_g} ${main.long_g2} `}>
                        <div className={`${main.growAns} `} style={{ '--d': '4s' }}>
                            <div className={`${main.leaf} ${main.leaf0} `}></div>
                        </div>
                        <div className={`${main.growAns} `} style={{ '--d': '4.2s' }}>
                            <div className={`${main.leaf} ${main.leaf1} `}></div>
                        </div>
                        <div className={`${main.growAns} `} style={{ '--d': '4.4s' }}>
                            <div className={`${main.leaf} ${main.leaf2} `}></div>
                        </div>
                        <div className={`${main.growAns} `} style={{ '--d': '4.6s' }}>
                            <div className={`${main.leaf} ${main.leaf3} `}></div>
                        </div>
                    </div>

                    <div className={`${main.long_g} ${main.long_g3} `}>
                        <div className={`${main.growAns} `} style={{ '--d': '4s' }}>
                            <div className={`${main.leaf} ${main.leaf0} `}></div>
                        </div>
                        <div className={`${main.growAns} `} style={{ '--d': '4.2s' }}>
                            <div className={`${main.leaf} ${main.leaf1} `}></div>
                        </div>
                        <div className={`${main.growAns} `} style={{ '--d': '3s' }}>
                            <div className={`${main.leaf} ${main.leaf2} `}></div>
                        </div>
                        <div className={`${main.growAns} `} style={{ '--d': '3.6s' }}>
                            <div className={`${main.leaf} ${main.leaf3} `}></div>
                        </div>
                    </div>

                    <div className={`${main.long_g} ${main.long_g4} `}>
                        <div className={`${main.growAns} `} style={{ '--d': '4s' }}>
                            <div className={`${main.leaf} ${main.leaf0} `}></div>
                        </div>
                        <div className={`${main.growAns} `} style={{ '--d': '4.2s' }}>
                            <div className={`${main.leaf} ${main.leaf1} `}></div>
                        </div>
                        <div className={`${main.growAns} `} style={{ '--d': '3s' }}>
                            <div className={`${main.leaf} ${main.leaf2} `}></div>
                        </div>
                        <div className={`${main.growAns} `} style={{ '--d': '3.6s' }}>
                            <div className={`${main.leaf} ${main.leaf3} `}></div>
                        </div>
                    </div>

                    <div className={`${main.long_g} ${main.long_g5} `}>
                        <div className={`${main.growAns} `} style={{ '--d': '4s' }}>
                            <div className={`${main.leaf} ${main.leaf0} `}></div>
                        </div>
                        <div className={`${main.growAns} `} style={{ '--d': '4.2s' }}>
                            <div className={`${main.leaf} ${main.leaf1} `}></div>
                        </div>
                        <div className={`${main.growAns} `} style={{ '--d': '3s' }}>
                            <div className={`${main.leaf} ${main.leaf2} `}></div>
                        </div>
                        <div className={`${main.growAns} `} style={{ '--d': '3.6s' }}>
                            <div className={`${main.leaf} ${main.leaf3} `}></div>
                        </div>
                    </div>

                    <div className={`${main.long_g} ${main.long_g6} `}>
                        <div className={`${main.growAns} `} style={{ '--d': '4.2s' }}>
                            <div className={`${main.leaf} ${main.leaf0} `}></div>
                        </div>
                        <div className={`${main.growAns} `} style={{ '--d': '4.4s' }}>
                            <div className={`${main.leaf} ${main.leaf1} `}></div>
                        </div>
                        <div className={`${main.growAns} `} style={{ '--d': '4.6s' }}>
                            <div className={`${main.leaf} ${main.leaf2} `}></div>
                        </div >
                        <div className={`${main.growAns} `} style={{ '--d': '4.8s' }}>
                            <div className={`${main.leaf} ${main.leaf3} `}></div>
                        </div >
                    </div >

                    <div className={`${main.long_g} ${main.long_g7} `}>
                        <div className={`${main.growAns} `} style={{ '--d': '3s' }}>
                            <div className={`${main.leaf} ${main.leaf0} `}></div>
                        </div>
                        <div className={`${main.growAns} `} style={{ '--d': '3.2s' }}>
                            <div className={`${main.leaf} ${main.leaf1} `}></div>
                        </div>
                        <div className={`${main.growAns} `} style={{ '--d': '3.5s' }}>
                            <div className={`${main.leaf} ${main.leaf2} `}></div>
                        </div>
                        <div className={`${main.growAns} `} style={{ '--d': '3.6s' }}>
                            <div className={`${main.leaf} ${main.leaf3} `}></div>
                        </div>
                    </div>
                </div>

            </div>
        </Flower>
    )
}

export default FlowerServer;