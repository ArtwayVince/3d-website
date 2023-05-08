/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 truck.gltf --transform
Author: Max (https://sketchfab.com/Max-5532)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/dump-truck-mercedes-benz-lp-608-63f87292f8aa488e8d5dcafd4ec7b3ec
Title: Dump Truck Mercedes Benz LP 608
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default  function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/truck-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Mercedes_benz_lp_608fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Door_2" position={[-114.26, 0, 358.82]}>
                  <group name="Door" position={[228.53, 13.47, -0.15]}>
                    <group name="Window___Light" position={[-83.32, -58.64, -77.4]}>
                      <mesh name="Window___Light_Window_+_light_0" geometry={nodes['Window___Light_Window_+_light_0'].geometry} material={materials.Window__light} />
                    </group>
                    <mesh name="Door_Body_0" geometry={nodes.Door_Body_0.geometry} material={materials.Body} />
                    <mesh name="Door_Other_0" geometry={nodes.Door_Other_0.geometry} material={materials.Other} />
                    <mesh name="Door_Interior_0" geometry={nodes.Door_Interior_0.geometry} material={materials.Interior} />
                  </group>
                </group>
                <group name="Door_1" position={[114.26, 0, 358.82]}>
                  <group name="Door_2_2" position={[0.02, 13.47, -0.15]}>
                    <group name="Window___Light_2" position={[-83.32, -58.64, -77.4]}>
                      <mesh name="Window___Light_2_Window_+_light_0" geometry={nodes['Window___Light_2_Window_+_light_0'].geometry} material={materials.Window__light} />
                    </group>
                    <mesh name="Door_2_2_Other_0" geometry={nodes.Door_2_2_Other_0.geometry} material={materials.Other} />
                    <mesh name="Door_2_2_Interior_0" geometry={nodes.Door_2_2_Interior_0.geometry} material={materials.Interior} />
                    <mesh name="Door_2_2_Body_0" geometry={nodes.Door_2_2_Body_0.geometry} material={materials.Body} />
                  </group>
                </group>
                <group name="Texture_finish">
                  <group name="Chassis_element_2" position={[-8.06, -49.76, 29.78]}>
                    <mesh name="Chassis_element_2_Chassis_element_0" geometry={nodes.Chassis_element_2_Chassis_element_0.geometry} material={materials.Chassis_element} />
                  </group>
                  <group name="Dumper" position={[-472.8, 1.8, -81.85]}>
                    <mesh name="Dumper_dumpster_0" geometry={nodes.Dumper_dumpster_0.geometry} material={materials.dumpster} />
                  </group>
                  <group name="Interior_element" position={[14.67, -43.45, 326.85]}>
                    <mesh name="Interior_element_interior_element_0" geometry={nodes.Interior_element_interior_element_0.geometry} material={materials.interior_element} />
                  </group>
                  <group name="Body" position={[24.02, 44.01, 259.73]}>
                    <mesh name="Body_Body_0" geometry={nodes.Body_Body_0.geometry} material={materials.Body} />
                  </group>
                  <group name="Window___Light_3" position={[30.96, -45.18, 281.28]}>
                    <mesh name="Window___Light_3_Window_+_light_0" geometry={nodes['Window___Light_3_Window_+_light_0'].geometry} material={materials.Window__light} />
                  </group>
                  <group name="Others" position={[78.36, -17.08, 45.15]}>
                    <mesh name="Others_Other_0" geometry={nodes.Others_Other_0.geometry} material={materials.Other} />
                  </group>
                  <group name="Seat" position={[31.26, -21.73, 163.43]}>
                    <mesh name="Seat_interior_element_0" geometry={nodes.Seat_interior_element_0.geometry} material={materials.interior_element} />
                  </group>
                  <group name="Interior_body" position={[24.02, -3.17, 57.56]}>
                    <mesh name="Interior_body_Interior_0" geometry={nodes.Interior_body_Interior_0.geometry} material={materials.Interior} />
                  </group>
                  <group name="Symmetry_3">
                    <group name="Sym" position={[108.14, -97.43, 190.43]}>
                      <group name="Chassis" position={[-72.68, 21.54, 3.42]}>
                        <mesh name="Chassis_Chassis_0" geometry={nodes.Chassis_Chassis_0.geometry} material={materials.Chassis} />
                      </group>
                      <group name="Wheel">
                        <mesh name="Wheel_Wheel_0" geometry={nodes.Wheel_Wheel_0.geometry} material={materials.Wheel} />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/truck-transformed.glb')