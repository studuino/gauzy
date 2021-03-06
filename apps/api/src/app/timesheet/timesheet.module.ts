import { Module } from '@nestjs/common';
import { Timesheet } from './timesheet.entity';
import { TimeSlot } from './time-slot.entity';
import { Activity } from './activity.entity';
import { Screenshot } from './screenshot.entity';
import { TimeLog } from './time-log.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimerController } from './timer/timer.controller';
import { TimerService } from './timer/timer.service';
import { Employee } from '../employee/employee.entity';
import { TimeSheetService } from './timesheet.service';
import { ActivityService } from './activity.service';
import { ScreenShotService } from './screenshot.service';
import { TimeSlotService } from './time_slot.service';
import { TimeLogController } from './time-log/time-log.controller';
import { TimeLogService } from './time-log/time-log.service';

@Module({
	controllers: [TimerController, TimeLogController],
	imports: [
		TypeOrmModule.forFeature([
			TimeSlot,
			Activity,
			Screenshot,
			TimeLog,
			Timesheet,
			Employee
		])
	],
	providers: [
		TimerService,
		TimeSheetService,
		ActivityService,
		ScreenShotService,
		TimeLogService,
		TimeSlotService
	],
	exports: [
		TimeSheetService,
		ActivityService,
		ScreenShotService,
		TimeLogService,
		TimeSlotService
	]
})
export class TimesheetModule {}
