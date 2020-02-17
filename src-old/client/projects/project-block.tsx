import * as React from 'react';
import { Link } from 'react-router-dom';

interface IProjectBlockProps {
   title:string;
   imageUrl:string;
   description: string;
   link?:string;
   localLink?: boolean;
}

var projectHeader = (title: string, imageUrl: string) => <div className="project-header">
      <img className="project-image" src={imageUrl} />
      <div className="project-title">{title}</div>
   </div>

export const ProjectBlock = (props: IProjectBlockProps) => <div className="project">
   {props.link ? (
      props.localLink ? <Link to="/sensational">{projectHeader(props.title, props.imageUrl)}</Link> : <a href={props.link} target="_blank">{projectHeader(props.title, props.imageUrl)}</a>
   ) : 
   <div>{projectHeader(props.title, props.imageUrl)}</div>}
   <div className="project-desc">
      {props.description}
   </div>
</div>

