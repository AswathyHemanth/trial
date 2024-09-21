create table
  public.organizers (
    id uuid not null default extensions.uuid_generate_v4 (),
    name character varying(255) not null,
    email character varying(255) not null,
    phone character varying(20) null,
    created_at timestamp with time zone null default now(),
    updated_at timestamp with time zone null default now(),
    constraint organizers_pkey primary key (id),
    constraint organizers_email_key unique (email)
  ) tablespace pg_default;

create trigger update_organizers_modtime before
update on organizers for each row
execute function update_modified_column ();



create table
  public.events (
    id uuid not null default extensions.uuid_generate_v4 (),
    title character varying(255) not null,
    description text null,
    start_date timestamp with time zone not null,
    end_date timestamp with time zone null,
    location character varying(255) null,
    image_url character varying(255) null,
    max_attendees integer null,
    price numeric(10, 2) null,
    is_published boolean null default false,
    created_at timestamp with time zone null default now(),
    updated_at timestamp with time zone null default now(),
    organizer_id uuid null,
    constraint events_pkey primary key (id),
    constraint events_organizer_id_fkey foreign key (organizer_id) references organizers (id)
  ) tablespace pg_default;

create index if not exists idx_events_start_date on public.events using btree (start_date) tablespace pg_default;

create trigger update_events_modtime before
update on events for each row
execute function update_modified_column ();





