'use client';
import {Card as  CoachCards } from '../../components/CoachCards/Card/Card';
// import { blogCards } from '@/utils/constans';

export default function CoachsPage() {
  return (
    <>
      <head>
        <title>Трудовые резервы | Тренерский состав</title>
        <meta name="title" content="Блог" />
      </head>
      <div>Тренерский состав</div>
      <CoachCards />
      </>
  );
}
