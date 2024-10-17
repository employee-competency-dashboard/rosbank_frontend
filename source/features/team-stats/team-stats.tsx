import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeTeamStatsProps } from './types';
import { TeamTableRow } from '../team-table-row';
// import Image from 'next/image';

export const TeamStats: React.FC<typeTeamStatsProps> = props => {
  const { teamData, className } = props;

  const level = [
    { name: 'none', title: 'Не владеет' },
    { name: 'junior', title: 'Начинающий' },
    { name: 'middle', title: 'Базовый' },
    { name: 'senior', title: 'Уверенный' },
    { name: 'expert', title: 'Экспертный' },
  ];

  const status = [
    { name: 'low', title: 'Соответствует' },
    { name: 'normal', title: 'Не соответствует' },
    { name: 'improving', title: 'В процессе развития' },
  ];

  const requestForTraining = (e: any) => {
    console.log('Отправить запрос на обучение', e);
  };

  return (
    <div className={cn(className, classes.team)}>
      <div className={cn(classes.glossary)}>
        <ul className={cn(classes.block, classes.blockLevel)}>
          {level.map((item, index) => (
            <li
              className={cn(classes.levelItem, classes[item.name])}
              key={index}
            >
              {item.title}
            </li>
          ))}
        </ul>
        <ul className={cn(classes.block, classes.blockStatus)}>
          {status.map((item, index) => (
            <li
              className={cn(classes.statusItem, classes[item.name])}
              key={index}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      <div className={cn(classes.tableTeam)}>
        <div className={cn(classes.tableHeader)}>
          <div className={cn(classes.users, classes.tableCell)}>
            Ключевые сотрудники
          </div>
          <div className={cn(classes.userRole, classes.tableCell)}>Роль</div>
          <div className={cn(classes.grade, classes.tableCell)}>Грейд</div>
          <div className={cn(classes.skills, classes.tableCell)}>Навыки</div>
          <div className={cn(classes.expertise, classes.tableCell)}>
            Соответствие задачам команды, %
          </div>
          <div className={cn(classes.progress, classes.tableCell)}>
            Готовность к повышению, %
          </div>
          <div className={cn(classes.action, classes.tableCell)}></div>
        </div>
        {teamData.map((item, index) => (
          <TeamTableRow
            key={index}
            user={item}
            className={cn(classes.tableUserRow)}
            requestForTraining={requestForTraining}
          />
        ))}
      </div>
    </div>
  );
};
