import React, {Component} from 'react';
import {View, Text} from 'react-native';
import State from './State';

const Reducer = (state = State, action) => {
  switch (action.type) {
    // ==================================================== NAVIGATION CONTENT ====================================================
    case 'Ibadah_Harian':
      return {...state, page: 'Ibadah Harian'};
    case 'Fisik_Harian':
      return {...state, page: 'Fisik Harian'};
    case 'History':
      return {...state, page: 'History'};
    case 'Statistik':
      return {...state, page: 'Statistik'};
    case 'Jadwal_Sholat':
      return {...state, page: 'Jadwal Sholat'};
    case 'About':
      return {...state, page: 'About'};
    // ==================================================== NAVIGATION CONTENT ====================================================

    // ==================================================== IBADAH HARIAN ====================================================
    // ================== GET DATA DB ======================= //
    case 'GetDBDataSubuhFalse':
      return {...state, subuh: false};
    case 'GetDBDataSubuhTrue':
      return {...state, subuh: true};
    case 'GetDBDataDzuhurFalse':
      return {...state, dzuhur: false};
    case 'GetDBDataDzuhurTrue':
      return {...state, dzuhur: true};
    case 'GetDBDataAsharFalse':
      return {...state, ashar: false};
    case 'GetDBDataAsharTrue':
      return {...state, ashar: true};
    case 'GetDBDataMaghribFalse':
      return {...state, maghrib: false};
    case 'GetDBDataMaghribTrue':
      return {...state, maghrib: true};
    case 'GetDBDataIsyaFalse':
      return {...state, isya: false};
    case 'GetDBDataIsyaTrue':
      return {...state, isya: true};
    case 'GetDBDataDhuhaFalse':
      return {...state, dhuha: false};
    case 'GetDBDataDhuhaTrue':
      return {...state, dhuha: true};
    case 'GetDBDataTahajudFalse':
      return {...state, tahajud: false};
    case 'GetDBDataTahajudTrue':
      return {...state, tahajud: true};
    case 'GetDBDataTadarusFalse':
      return {...state, tadarus: false};
    case 'GetDBDataTadarusTrue':
      return {...state, tadarus: true};
    case 'GetDBDataSirahFalse':
      return {...state, sirah: false};
    case 'GetDBDataSirahTrue':
      return {...state, sirah: true};
    case 'GetDBDataHafalanQuranFalse':
      return {...state, hafalanQuran: false};
    case 'GetDBDataHafalanQuranTrue':
      return {...state, hafalanQuran: true};
    case 'GetDBDataHafalanHadistFalse':
      return {...state, hafalanHadist: false};
    case 'GetDBDataHafalanHadistTrue':
      return {...state, hafalanHadist: true};
    // ================== GET DATA DB ======================= //
    case 'Subuh':
      return {...state, subuh: !state.subuh};
    case 'Dzuhur':
      return {...state, dzuhur: !state.dzuhur};
    case 'Ashar':
      return {...state, ashar: !state.ashar};
    case 'Maghrib':
      return {...state, maghrib: !state.maghrib};
    case 'Isya':
      return {...state, isya: !state.isya};
    case 'Dhuha':
      return {...state, dhuha: !state.dhuha};
    case 'Tahajud':
      return {...state, tahajud: !state.tahajud};
    case 'Tadarus':
      return {...state, tadarus: !state.tadarus};
    case 'Sirah':
      return {...state, sirah: !state.sirah};
    case 'HafalanQuran':
      return {...state, hafalanQuran: !state.hafalanQuran};
    case 'HafalanHadist':
      return {...state, hafalanHadist: !state.hafalanHadist};
    // ==================================================== IBADAH HARIAN ====================================================
    // ==================================================== FISIK HARIAN ====================================================
    // ================== GET DATA DB ======================= //
    case 'GetDBDataPushUp':
      return {...state, pushUp: action.dataDBPushUp};
    case 'GetDBDataSitUp':
      return {...state, sitUp: action.dataDBSitUp};
    case 'GetDBDataSquatJump':
      return {...state, squatJump: action.dataDBSquatJump};
    // ================== GET DATA DB ======================= //
    case 'PushUp':
      return {...state, pushUp: action.jumlahPushUp};
    case 'SitUp':
      return {...state, sitUp: action.jumlahSitUp};
    case 'SquatJump':
      return {...state, squatJump: action.jumlahSquatJump};
    // ==================================================== FISIK HARIAN ====================================================
    // ==================================================== LOGIN ====================================================
    case 'Username':
      return {...state, username: action.dataUsername};
  }
  return state;
};

export default Reducer;
